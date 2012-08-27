/*
    java -cp js.jar:./classes:./classes/* org.mozilla.javascript.tools.shell.Main -modules gremlin.js -debug
    var g = require('gremlin.js')
*/

;(function (scope) {

    importClass(com.tinkerpop.gremlin.Tokens);
    importClass(com.tinkerpop.blueprints.Vertex);

    importPackage(com.tinkerpop.pipes);
    importPackage(com.tinkerpop.pipes.sideeffect);
    importPackage(com.tinkerpop.pipes.filter);
    importPackage(com.tinkerpop.pipes.transform);
    importPackage(com.tinkerpop.pipes.util.structures);
    importPackage(com.tinkerpop.blueprints);
    importPackage(com.tinkerpop.gremlin);
    //importPackage(com.tinkerpop.gremlin.java);
    importClass(com.tinkerpop.gremlin.java.GremlinPipeline);
    importClass(com.tinkerpop.pipes.util.Pipeline);
    importClass(com.tinkerpop.gremlin.Imports);
    //importPackage(com.tinkerpop.blueprints);
    importPackage(com.tinkerpop.blueprints.impls.orient);
    importPackage(com.tinkerpop.blueprints.impls.tg);

    //var gremlinPipeline = require('GremlinJSPipeline.js');

    /** Detect free variable 'exports' */
    var freeExports = typeof exports == 'object' && exports &&
        (typeof global == 'object' && global && global == global.global && (scope = global), exports);

    var toString = Object.prototype.toString,
        ArrayProto = Array.prototype,
        push = ArrayProto.push,
        pop = ArrayProto.pop,
        slice = ArrayProto.slice,
        shift = ArrayProto.shift,
        indexOf = ArrayProto.indexOf,
        concat = ArrayProto.concat,
        fn = {},
        unpipedFuncs = ['toString'];

    fn.include = function (array, i) {
        return indexOf.call(array, i) === -1 ? false : true;
    };

    Function.prototype.pipe = function () {
        var that = this;
        return function () {
            var pipedArgs = [];
            var args = slice.call(arguments);

            push.call(pipedArgs, this.pipedObjects);
            push.apply(pipedArgs, arguments);
            // print(that.name);
            // print(args.length);
            // print(args[0]);
            // print(args[0][0]);
            // print(args[1]);
            this.pipedObjects = !!args.length ? that.apply(this.graph, args) : that.apply(this.graph);

            if (isStep.call(this, that.name)) {
                return new GremlinPipeline(this.pipedObjects);

                // return new JavaAdapter(GremlinPipeline, { emit: function () {
                //     return this.pipedObjects;
                // }}, this.pipedObjects)

            }
            return this.pipedObjects;
        };
    };

    //pipe enable all Gremlin functions except unpiped functions
    function pipe() {
        var func, self = this;
        for (func in self) {
            //if (self.hasOwnProperty(func)) {
            if (typeof self[func] === "function" && !fn.include(unpipedFuncs, func)) {
                self[func] = self[func].pipe();
            }
            //}
        }
        return self;
    }


    //function GremlinJSPipeline() {}
    /**
     * @author Frank Panetta
     */
    function Gremlin(newGraph) {
        print('in gremlin');
        this.steps = {
            V: true,
            E: true,
            v: true,
            e: true
        };
        this.graph = newGraph,
        this.pipedObjects = [];

        this.toString = function () { return 'gremlin pipeline';}
        //create & store methods()
        load.call(this);
        addData.call(this);
        return pipe.call(this); 
    }

    // Gremlin.TinkerGraph = function() {
    //     var args = slice.call(arguments),
    //         gremlin = new Gremlin();

    //     load.call(gremlin);
    //     if (!!args.length) {
    //         return JavaAdapter(TinkerGraph, gremlin, args[0]);
    //     }
    //     return new JavaAdapter(TinkerGraph, gremlin);
    // };

    Gremlin.setGraph = function() {
        var args = slice.call(arguments);
            print('setGraph');
        if (!!!args[0]) {
            //Throw error
            print('Please specify a graph database');
            gremlin = null;
            return;
        }
        if (args[0] instanceof Graph) {
            print('graph');
        }
        print('createGremlin');
        return new Gremlin(args[0]);
    }

    function load() {

        var func,
            GremlinJSPipeline = {},
            self = this,
            //skip = [],
            hop = {}.hasOwnProperty;


        GremlinJSPipeline = new GremlinPipeline();
        // if (!GremlinJSPipeline.pathEnabled) {}

        //Load Pipeline
        for (func in GremlinJSPipeline) {
            if (hop.call(GremlinJSPipeline, func)) {
                if (func === 'currentPath') { //Need to figure this out??
                } else 
                if (typeof GremlinJSPipeline[func] === "function") {
                    self.__proto__[func] = GremlinJSPipeline[func];
                    print(func);
                    addStep.call(self, func);
                }
            }
        
        }

        //Load Graph
        for (func in this.graph) {
            if (typeof this.graph[func] === "function") {
                self.__proto__[func] = this.graph[func];
            }
        }



        // ElementLoader.load();
        // GraphLoader.load();
        // IndexLoader.load();
        // ObjectLoader.load();
        // PipeLoader.load();

        // try {
        //     SailGraphLoader.load();
        // } catch (Throwable e) {
        //     // this means that SailGraph was not in the dependency
        //     // that is ok
        //}

        // Gremlin.test = GremlinJSPipeline;
        // //Gremlin.pipeline = new GremlinJSPipeline();
        // if (Gremlin.pipeline instanceof GremlinJSPipeline) {
        //     print('cool');
        // } else {
        //     print('not colol!');
        // }
    }

    //return GremlinGroovyPipeline
    //start GremlinGroovyPipeline || Pipe
    function compose(/*final Object*/ start, /*final Pipe*/ pipe) {
         
        var pipeline; //GremlinGroovyPipeline
        if (start instanceof GremlinPipeline) {
            pipeline = start;
            if (null != pipe)
                pipeline.addPipe(pipe);
        } else if (start instanceof Pipe) {
            pipeline = new GremlinPipeline();
            pipeline.addPipe(start);
            if (null != pipe)
                pipeline.addPipe(pipe);
        } else {
            pipeline = new GremlinPipeline(start);
            if (null != pipe)
                pipeline.addPipe(pipe);
        }

        return pipeline;
    }

    // public static Pipe compile(final String script) {
    //     return (Pipe) engine.eval(script, new SimpleBindings());
    // }

    function addStep(stepName) {
        this.steps[stepName] = true;
    }

    function isStep(stepName) {
        return !!this.steps[stepName];
    }

    function getStepNames() {
        var r = [];
        for (k in this.steps) {
            if (this.steps.hasOwnProperty(k)) {
                r.push(k);
            }
        }
        return r;
    }


        // Graph.metaClass.V = {->
        //     return new GremlinGroovyPipeline(((Graph) delegate).getVertices());
        // }

        // Graph.metaClass.V = { final String key, final Object value ->
        //     return new GremlinGroovyPipeline(((Graph) delegate).getVertices(key, value));
        // }

        // Graph.metaClass.E = {->
        //     return new GremlinGroovyPipeline(((Graph) delegate).getEdges());
        // }

        // Graph.metaClass.E = { final String key, final Object value ->
        //     return new GremlinGroovyPipeline(((Graph) delegate).getEdges(key, value));
        // }


    Gremlin.toString = function () { return "gremlin-js - " + Tokens.VERSION; };

    function V() {
        var args = slice.call(arguments);
        return !!args.length ? this.getVertices.apply(null, args) : this.getVertices();
    }

    function E() {
        var args = slice.call(arguments);
        return !!args.length ? this.getEdges.apply(null, args) : this.getEdges();
    }

    function v() {
        var args = slice.call(arguments),
            vertices = [];

        for (var i = 0; i < args.length; i++) {
            push.call(vertices, this.getVertex(args[i]));
        };

        return vertices;
    }

    function e() {
        var args = slice.call(arguments),
            edges = [];

        for (var i = 0; i < args.length; i++) {
            push.call(edges, this.getEdge(args[i]));
        };

        return edges;
    }

    function version() {
        return Tokens.VERSION;
    }

    function language() {
        return 'gremlin-js';
    }


    function addData() {
       var marko = this.graph.addVertex(1);
        marko.setProperty("name", "marko");
        marko.setProperty("age", 29);

        var vadas = this.graph.addVertex(2);
        vadas.setProperty("name", "vadas");
        vadas.setProperty("age", 27);

        var lop = this.graph.addVertex(3);
        lop.setProperty("name", "lop");
        lop.setProperty("lang", "java");

        var josh = this.graph.addVertex(4);
        josh.setProperty("name", "josh");
        josh.setProperty("age", 32);

        var ripple = this.graph.addVertex(5);
        ripple.setProperty("name", "ripple");
        ripple.setProperty("lang", "java");

        var peter = this.graph.addVertex(6);
        peter.setProperty("name", "peter");
        peter.setProperty("age", 35);

        this.graph.addEdge(7, marko, vadas, "knows").setProperty("weight", 0.5);
        this.graph.addEdge(8, marko, josh, "knows").setProperty("weight", 1.0);
        this.graph.addEdge(9, marko, lop, "created").setProperty("weight", 0.4);

        this.graph.addEdge(10, josh, ripple, "created").setProperty("weight", 1.0);
        this.graph.addEdge(11, josh, lop, "created").setProperty("weight", 0.4);

        this.graph.addEdge(12, peter, lop, "created").setProperty("weight", 0.2);
    }
    // // GRAPHML

    //     Graph.metaClass.loadGraphML = {final def fileObject ->
    //         try {
    //             GraphMLReader.inputGraph((Graph) delegate, new URL(fileObject).openStream());
    //         } catch (MalformedURLException e) {
    //             GraphMLReader.inputGraph((Graph) delegate, new FileInputStream(fileObject))
    //         }
    //     }

    //     Graph.metaClass.saveGraphML = {final def fileObject ->
    //         GraphMLWriter.outputGraph((Graph) delegate, new FileOutputStream(fileObject))
    //     }

    //     // GRAPHSON

    //     Graph.metaClass.loadGraphSON = {final def fileObject ->
    //         try {
    //             GraphSONReader.inputGraph((Graph) delegate, new URL(fileObject).openStream());
    //         } catch (MalformedURLException e) {
    //             GraphSONReader.inputGraph((Graph) delegate, new FileInputStream(fileObject))
    //         }
    //     }

    //     Graph.metaClass.saveGraphSON = {final def fileObject ->
    //         GraphSONWriter.outputGraph((Graph) delegate, new FileOutputStream(fileObject), GraphSONMode.NORMAL)
    //     }

    //     Graph.metaClass.saveGraphSON = {final def fileObject, final GraphSONMode mode ->
    //         GraphSONWriter.outputGraph((Graph) delegate, new FileOutputStream(fileObject), mode)
    //     }

    //     Graph.metaClass.saveGraphSON = {final def fileObject, final GraphSONMode mode,
    //                                     final List<String> vertexPropertyKeys, final List<String> edgePropertyKeys ->
    //         GraphSONWriter.outputGraph((Graph) delegate, new FileOutputStream(fileObject),
    //                                    vertexPropertyKeys as Set, edgePropertyKeys as Set, mode)
    //     }

    //     // GML

    //     Graph.metaClass.loadGML = {final def fileObject ->
    //         try {
    //             GMLReader.inputGraph((Graph) delegate, new URL(fileObject).openStream());
    //         } catch (MalformedURLException e) {
    //             GMLReader.inputGraph((Graph) delegate, new FileInputStream(fileObject))
    //         }
    //     }

    //     Graph.metaClass.saveGML = {final def fileObject ->
    //         GMLWriter.outputGraph((Graph) delegate, new FileOutputStream(fileObject));
    //     }

    Gremlin.prototype.version = version;
    Gremlin.prototype.language = language;

    Gremlin.prototype.V = V;
    Gremlin.prototype.E = E;
    Gremlin.prototype.v = v;
    Gremlin.prototype.e = e;

    if (freeExports) {
        if (typeof module == 'object' && module && module.exports == freeExports) {
          (module.exports = Gremlin).Gremlin = Gremlin;
        }
    }

}(this));
