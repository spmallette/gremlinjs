/*
    --xjava -cp js.jar:./classes:./classes/* org.mozilla.javascript.tools.shell.Main -modules gremlin.js -debug
    ==>java -cp js.jar:./classes:./classes/* org.mozilla.javascript.tools.shell.Main -modules . -debug
    var g = require('gremlin.js')
*/

;(function (scope) {

    // importClass(com.tinkerpop.gremlin.Tokens);
    // importClass(com.tinkerpop.blueprints.Vertex);

    importPackage(Packages.com.tinkerpop.pipes);
    // importPackage(Packages.com.tinkerpop.pipes.sideeffect);
    // importPackage(Packages.com.tinkerpop.pipes.filter);
    // importPackage(Packages.com.tinkerpop.pipes.transform);
    // importPackage(Packages.com.tinkerpop.pipes.util.structures);
    // importPackage(Packages.com.tinkerpop.blueprints);
    // //importPackage(Packages.com.tinkerpop.gremlin);
    //importPackage(Packages.com.tinkerpop.gremlin.java);

    importClass(com.tinkerpop.gremlin.java.GremlinPipeline);
    importClass(com.tinkerpop.gremlin.java.GremlinFluentPipeline);

    // importClass(com.tinkerpop.pipes.util.Pipeline);
    // importClass(com.tinkerpop.gremlin.Imports);
    importPackage(com.tinkerpop.blueprints);
    // importPackage(Packages.com.tinkerpop.blueprints.impls.orient);
    importPackage(Packages.com.tinkerpop.blueprints.impls.tg);



    importClass(com.tinkerpop.blueprints.Edge);
    importClass(com.tinkerpop.blueprints.Element);
    importClass(com.tinkerpop.blueprints.Graph);
    importClass(com.tinkerpop.blueprints.Vertex);
    importClass(com.tinkerpop.gremlin.Tokens);
    importClass(com.tinkerpop.gremlin.pipes.filter.IdFilterPipe);
    importClass(com.tinkerpop.gremlin.pipes.filter.IntervalFilterPipe);
    importClass(com.tinkerpop.gremlin.pipes.filter.LabelFilterPipe);
    importClass(com.tinkerpop.gremlin.pipes.filter.PropertyFilterPipe);
    importClass(com.tinkerpop.gremlin.pipes.transform.BothEdgesPipe);
    importClass(com.tinkerpop.gremlin.pipes.transform.BothPipe);
    importClass(com.tinkerpop.gremlin.pipes.transform.BothVerticesPipe);
    importClass(com.tinkerpop.gremlin.pipes.transform.IdEdgePipe);
    importClass(com.tinkerpop.gremlin.pipes.transform.IdPipe);
    importClass(com.tinkerpop.gremlin.pipes.transform.IdVertexPipe);
    importClass(com.tinkerpop.gremlin.pipes.transform.InEdgesPipe);
    importClass(com.tinkerpop.gremlin.pipes.transform.InPipe);
    importClass(com.tinkerpop.gremlin.pipes.transform.InVertexPipe);
    importClass(com.tinkerpop.gremlin.pipes.transform.LabelPipe);
    importClass(com.tinkerpop.gremlin.pipes.transform.OutEdgesPipe);
    importClass(com.tinkerpop.gremlin.pipes.transform.OutPipe);
    importClass(com.tinkerpop.gremlin.pipes.transform.OutVertexPipe);
    importClass(com.tinkerpop.gremlin.pipes.transform.PropertyMapPipe);
    importClass(com.tinkerpop.gremlin.pipes.transform.PropertyPipe);
    importClass(com.tinkerpop.pipes.FunctionPipe);
    importClass(com.tinkerpop.pipes.Pipe);
    importClass(com.tinkerpop.pipes.PipeFunction);
    importClass(com.tinkerpop.pipes.branch.CopySplitPipe);
    importClass(com.tinkerpop.pipes.branch.ExhaustMergePipe);
    importClass(com.tinkerpop.pipes.branch.FairMergePipe);
    importClass(com.tinkerpop.pipes.branch.IfThenElsePipe);
    importClass(com.tinkerpop.pipes.branch.LoopPipe);
    importClass(com.tinkerpop.pipes.filter.AndFilterPipe);
    importClass(com.tinkerpop.pipes.filter.BackFilterPipe);
    importClass(com.tinkerpop.pipes.filter.CyclicPathFilterPipe);
    importClass(com.tinkerpop.pipes.filter.DuplicateFilterPipe);
    importClass(com.tinkerpop.pipes.filter.ExceptFilterPipe);
    importClass(com.tinkerpop.pipes.filter.FilterFunctionPipe);
    importClass(com.tinkerpop.pipes.filter.FilterPipe);
    importClass(com.tinkerpop.pipes.filter.OrFilterPipe);
    importClass(com.tinkerpop.pipes.filter.RandomFilterPipe);
    importClass(com.tinkerpop.pipes.filter.RangeFilterPipe);
    importClass(com.tinkerpop.pipes.filter.RetainFilterPipe);
    importClass(com.tinkerpop.pipes.sideeffect.AggregatePipe);
    importClass(com.tinkerpop.pipes.sideeffect.GroupByPipe);
    importClass(com.tinkerpop.pipes.sideeffect.GroupByReducePipe);
    importClass(com.tinkerpop.pipes.sideeffect.GroupCountFunctionPipe);
    importClass(com.tinkerpop.pipes.sideeffect.GroupCountPipe);
    importClass(com.tinkerpop.pipes.sideeffect.OptionalPipe);
    importClass(com.tinkerpop.pipes.sideeffect.SideEffectFunctionPipe);
    importClass(com.tinkerpop.pipes.sideeffect.SideEffectPipe);
    importClass(com.tinkerpop.pipes.sideeffect.StorePipe);
    importClass(com.tinkerpop.pipes.sideeffect.TablePipe);
    importClass(com.tinkerpop.pipes.sideeffect.TreePipe);
    importClass(com.tinkerpop.pipes.transform.GatherFunctionPipe);
    importClass(com.tinkerpop.pipes.transform.GatherPipe);
    importClass(com.tinkerpop.pipes.transform.IdentityPipe);
    importClass(com.tinkerpop.pipes.transform.MemoizePipe);
    importClass(com.tinkerpop.pipes.transform.OrderPipe);
    importClass(com.tinkerpop.pipes.transform.PathPipe);
    importClass(com.tinkerpop.pipes.transform.ScatterPipe);
    importClass(com.tinkerpop.pipes.transform.SelectPipe);
    importClass(com.tinkerpop.pipes.transform.SideEffectCapPipe);
    importClass(com.tinkerpop.pipes.transform.TransformFunctionPipe);
    importClass(com.tinkerpop.pipes.util.AsPipe);
    importClass(com.tinkerpop.pipes.util.FluentUtility);
    importClass(com.tinkerpop.pipes.util.MetaPipe);
    importClass(com.tinkerpop.pipes.util.PipeHelper);
    importClass(com.tinkerpop.pipes.util.Pipeline);
    importClass(com.tinkerpop.pipes.util.StartPipe);
    importClass(com.tinkerpop.pipes.util.structures.Pair);
    importClass(com.tinkerpop.pipes.util.structures.Row);
    importClass(com.tinkerpop.pipes.util.structures.Table);
    importClass(com.tinkerpop.pipes.util.structures.Tree);
    //var gremlinPipeline = require('GremlinJSPipeline.js');

    /** Detect free variable 'exports' */
    var freeExports = typeof exports == 'object' && exports &&
        (typeof global == 'object' && global && global == global.global && (scope = global), exports);

    //var GremlinJSPipeline = load('GremlinJSPipeline.js');

    var toString = Object.prototype.toString,
        ArrayProto = Array.prototype,
        push = ArrayProto.push,
        pop = ArrayProto.pop,
        slice = ArrayProto.slice,
        shift = ArrayProto.shift,
        indexOf = ArrayProto.indexOf,
        concat = ArrayProto.concat,
        fn = {},
        steps = {},
        unpipedFuncs = ['toString', 'toList', 'toArray'];

    fn.include = function (array, i) {
        return indexOf.call(array, i) === -1 ? false : true;
    };

    Function.prototype.pipe = function () {
        var that = this;
        return function () {
            var args = slice.call(arguments);

            print(that.name);
            print(that);
            //if (isStep.call(this, that.name)) {
              //  print('is true step');
                 this.pipeline = !!args.length ? that.apply(this, args) : that.call(this);
             //} 
            //  else {
            //     print('something wrong');
            //     return !!args.length ? that.apply(this.graph, args) : that.call(this.graph);
            // }
            
            return this;
        };
    };

    //pipe enable all Gremlin functions except unpiped functions
    function pipe() {
        var func, self = this,hop = {}.hasOwnProperty;
        for (func in self) {
            //if (self.hasOwnProperty(func)) { *********************
            //if (hop.call(self, func)) {
                if (typeof self[func] === "function" && isStep(func) && !fn.include(unpipedFuncs, func)) {
                    self[func] = self[func].pipe();
                    print(func);
                }
            //}
        }
        return self;
    }

var GremlinJSPipeline = {
    out: function (labels) {
        var args = slice.call(arguments);
        return !!args.length ? compose(this.pipeline).add(new OutPipe(args)) :
            compose(this.pipeline).add(new OutPipe());
    },
    in: function (labels) {
        var args = slice.call(arguments);
        return !!args.length ? compose(this.pipeline).add(new InPipe(args)) :
            compose(this.pipeline).add(new InPipe());
    },
    id: function () {
        return compose(this.pipeline).add(new IdPipe());
    },
    toList: function () {
        return this.pipeline.toList();
    },
    toArray: function () {
        var list = [],
            iterator = this.pipeline.toList().iterator();
        while (iterator.hasNext()) {
            push.call(list, iterator.next());
        }
        return list;
    },
    v: function() {
        var args = slice.call(arguments),
            vertices = [];

        for (var i = 0; i < args.length; i++) {
            push.call(vertices, this.getVertex.call(this.graph, args[i]));
        };
        
        return compose(vertices);
    },
    V: function() {
        var args = slice.call(arguments),
            vertices;

        vertices = !!args.length ? this.getVertices.apply(this.graph, args) : this.getVertices.call(this.graph);

        return new GremlinPipeline(vertices);
    },

    E: function() {
        var args = slice.call(arguments);
        return !!args.length ? this.graph.getEdges.apply(null, args) : this.graph.getEdges();
    },

    e: function() {
        var args = slice.call(arguments),
            edges = [];

        for (var i = 0; i < args.length; i++) {
            push.call(edges, this.graph.getEdge(args[i]));
        };

        return compose(edges);
    }


    /*

    // /**
    //  * Add an IdFilterPipe, LabelFilterPipe, or PropertyFilterPipe to the end of the Pipeline.
    //  * If the incoming element has the provided key/value as check with .equals(), then let the element pass.
    //  * If the key is id or label, then use respect id or label filtering.
    //  *
    //  * @param key   the property key to check
    //  * @param value the object to filter on
    //  * @return the extended Pipeline
    //  */
    // public GremlinFluentPipeline<S, ? extends Element> has(final String key, final Object value);

    // /**
    //  * Add an IdFilterPipe, LabelFilterPipe, or PropertyFilterPipe to the end of the Pipeline.
    //  * If the incoming element has the provided key/value as check with .equals(), then let the element pass.
    //  * If the key is id or label, then use respect id or label filtering.
    //  *
    //  * @param key        the property key to check
    //  * @param comparison the comparison to use
    //  * @param value      the object to filter on
    //  * @return the extended Pipeline
    //  */
    // public GremlinFluentPipeline<S, ? extends Element> has(final String key, final Tokens.T comparison, final Object value);

    // /**
    //  * Add an IdFilterPipe, LabelFilterPipe, or PropertyFilterPipe to the end of the Pipeline.
    //  * If the incoming element has the provided key/value as check with .equals(), then filter the element.
    //  * If the key is id or label, then use respect id or label filtering.
    //  *
    //  * @param key   the property key to check
    //  * @param value the object to filter on
    //  * @return the extended Pipeline
    //  */
    // public GremlinFluentPipeline<S, ? extends Element> hasNot(final String key, final Object value);

    // /**
    //  * Add an IdFilterPipe, LabelFilterPipe, or PropertyFilterPipe to the end of the Pipeline.
    //  * If the incoming element has the provided key/value as check with .equals(), then filter the element.
    //  * If the key is id or label, then use respect id or label filtering.
    //  *
    //  * @param key        the property key to check
    //  * @param comparison the comparison to use
    //  * @param value      the object to filter on
    //  * @return the extended Pipeline
    //  */
    // public GremlinFluentPipeline<S, ? extends Element> hasNot(final String key, final Tokens.T comparison, final Object value);

    // /**
    //  * Add an IntervalFilterPipe to the end of the Pipeline.
    //  * If the incoming element has a value that is within the interval value range specified, then the element is allows to pass.
    //  * If hte incoming element's value for the key is null, the element is filtered.
    //  *
    //  * @param key        the property key to check
    //  * @param startValue the start of the interval (inclusive)
    //  * @param endValue   the end of the interval (exclusive)
    //  * @return the extended Pipeline
    //  */
    // public GremlinFluentPipeline<S, ? extends Element> interval(final String key, final Object startValue, final Object endValue);

    // /**
    //  * Add a BothEdgesPipe to the end of the Pipeline.
    //  * Emit both incoming and outgoing edges for the incoming vertex.
    //  *
    //  * @param labels the edge labels to traverse
    //  * @return the extended Pipeline
    //  */
    // public GremlinFluentPipeline<S, Edge> bothE(final String... labels);

    // /**
    //  * Add a BothPipe to the end of the Pipeline.
    //  * Emit both the incoming and outgoing adjacent vertices for the incoming vertex.
    //  *
    //  * @param labels the edge labels to traverse
    //  * @return the extended Pipeline
    //  */
    // public GremlinFluentPipeline<S, Vertex> both(final String... labels);

    // /**
    //  * Add a BothVerticesPipe to the end of the Pipeline.
    //  * Emit both the tail and head vertices of the incoming edge.
    //  *
    //  * @return the extended Pipeline
    //  */
    // public GremlinFluentPipeline<S, Vertex> bothV();

    // /**
    //  * Add an IdEdgePipe to the end of the Pipeline.
    //  * Emit the edges of the graph whose ids are those of the incoming id objects.
    //  *
    //  * @param graph the graph of the pipe
    //  * @return the extended Pipeline
    //  */
    // public GremlinFluentPipeline<S, Edge> idEdge(final Graph graph);

    // /**
    //  * Add an IdPipe to the end of the Pipeline.
    //  * Emit the id of the incoming element.
    //  *
    //  * @return the extended Pipeline
    //  */
    // public GremlinFluentPipeline<S, Object> id();

    // /**
    //  * Add an IdVertexPipe to the end of the Pipeline.
    //  * Emit the vertices of the graph whose ids are those of the incoming id objects.
    //  *
    //  * @param graph the graph of the pipe
    //  * @return the extended Pipeline
    //  */
    // public GremlinFluentPipeline<S, Vertex> idVertex(final Graph graph);

    // /**
    //  * Add an InEdgesPipe to the end of the Pipeline.
    //  * Emit the incoming edges for the incoming vertex.
    //  *
    //  * @param labels the edge labels to traverse
    //  * @return the extended Pipeline
    //  */
    // public GremlinFluentPipeline<S, Edge> inE(final String... labels);

    // /**
    //  * Add a InPipe to the end of the Pipeline.
    //  * Emit the adjacent incoming vertices for the incoming vertex.
    //  *
    //  * @param labels the edge labels to traverse
    //  * @return the extended Pipeline
    //  */
    // public GremlinFluentPipeline<S, Vertex> in(final String... labels);

    // /**
    //  * Add an InVertexPipe to the end of the Pipeline.
    //  * Emit the tail vertex of the incoming edge.
    //  *
    //  * @return the extended Pipeline
    //  */
    // public GremlinFluentPipeline<S, Vertex> inV();

    // /**
    //  * Add an LabelPipe to the end of the Pipeline.
    //  * Emit the label of the incoming edge.
    //  *
    //  * @return the extended Pipeline
    //  */
    // public GremlinFluentPipeline<S, String> label();

    // /**
    //  * Add an OutEdgesPipe to the end of the Pipeline.
    //  * Emit the outgoing edges for the incoming vertex.
    //  *
    //  * @param labels the edge labels to traverse
    //  * @return the extended Pipeline
    //  */
    // public GremlinFluentPipeline<S, Edge> outE(final String... labels);

    // /**
    //  * Add an OutPipe to the end of the Pipeline.
    //  * Emit the adjacent outgoing vertices of the incoming vertex.
    //  *
    //  * @param labels the edge labels to traverse
    //  * @return the extended Pipeline
    //  */
    // public GremlinFluentPipeline<S, Vertex> out(final String... labels);

    // /**
    //  * Add an OutVertexPipe to the end of the Pipeline.
    //  * Emit the tail vertex of the incoming edge.
    //  *
    //  * @return the extended Pipeline
    //  */
    // public GremlinFluentPipeline<S, Vertex> outV();

    // /**
    //  * Add a PropertyMapPipe to the end of the Pipeline.
    //  * Emit the properties of the incoming element as a java.util.Map.
    //  *
    //  * @return the extended Pipeline
    //  */
    // public GremlinFluentPipeline<S, Map<String, Object>> map();

    // /**
    //  * Add a PropertyPipe to the end of the Pipeline.
    //  * Emit the respective property of the incoming element.
    //  *
    //  * @param key the property key
    //  * @return the extended Pipeline
    //  */
    // public GremlinFluentPipeline<S, Object> property(final String key);


    // */
}
    //function out() {}

    //function GremlinJSPipeline() {}
    /**
     * @author Frank Panetta
     */
    function Gremlin(newGraph) {

        //print('in gremlin');

        this.graph = newGraph;
        this.pipeline = new GremlinPipeline();

        this.toString = function () {
            if (this instanceof Gremlin) {
                return this.pipeline.pipes.toString();
            }
            return 'ggg';
        }

        //create & store methods()
        load.call(this);
        addData.call(this);
        //return 
        
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
            //print('setGraph');
        if (!!!args[0] || !(args[0] instanceof Graph)) {
            //Throw error
            print('Please specify a graph database');
            gremlin = null;
            return;
        }
        return new Gremlin(args[0]);
    }

    function load() {

        var func,
            //GremlinJSPipeline = {},
            //self = this,
            //skip = [],
            hop = ({}).hasOwnProperty;


        // GremlinJSPipeline = new GremlinPipeline();//, GremlinFluentPipeline,{});

        // if(GremlinJSPipeline instanceof GremlinPipeline){
        //     print('ok');
        // } else {
        //     print('not ok');
        // }

        // if (!GremlinJSPipeline.pathEnabled) {}

        //I might need to create my own implementation to GremlinPipeline
        //Load Pipeline

        for (func in this.pipeline) {
            if (hop.call(this.pipeline, func)) {
                if (func === 'currentPath') { //Need to figure this out??
                } else 
                if (typeof this.pipeline[func] === "function") {
                      this.__proto__[func] = this.pipeline[func];

                    //print(this[func]);
                    addStep.call(this, func);
                }
            }
        
        }

        for (func in GremlinJSPipeline) {
            //if (hop.call(this.pipeline, func)) {

            if (typeof GremlinJSPipeline[func] === "function") {
                      this.__proto__[func] = GremlinJSPipeline[func];
                      addStep.call(this, func);                        
                      //print(func);
                    //print(this[func]);
                }
                    //addStep.call(this, func);
                
            //}
        
        }

        //Load Graph
        for (func in this.graph) {
            if (typeof this.graph[func] === "function") {
                this.__proto__[func] = this.graph[func];
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
        steps[stepName] = true;
    }

    function isStep(stepName) {
        print('step name ' + stepName)
        return steps[stepName];
    }

    function getStepNames() {
        var r = [];
        for (k in steps) {
            if (steps.hasOwnProperty(k)) {
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

    // function V() {
    //     var args = slice.call(arguments);
    //     return !!args.length ? this.getVertices.apply(null, args) : this.getVertices();
    // }

    // function E() {
    //     var args = slice.call(arguments);
    //     return !!args.length ? this.getEdges.apply(null, args) : this.getEdges();
    // }

    // function v() {
    //     var args = slice.call(arguments),
    //         vertices = [];

    //     for (var i = 0; i < args.length; i++) {
    //         push.call(vertices, this.graph.getVertex(args[i]));
    //     };
        
    //     return compose(vertices);
    // }

    // function e() {
    //     var args = slice.call(arguments),
    //         edges = [];

    //     for (var i = 0; i < args.length; i++) {
    //         push.call(edges, this.getEdge(args[i]));
    //     };

    //     return compose(edges);
    // }

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

    // Gremlin.prototype.V = V;
    // Gremlin.prototype.E = E;
    //Gremlin.prototype.v = v;
    // Gremlin.prototype.e = e;

    //Gremlin.prototype.out = out;

    if (freeExports) {
        //if (typeof module == 'object' && module && module.exports == freeExports) {
          (module.exports = Gremlin).Gremlin = Gremlin;
        //}
    }

}(this));
