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
    importPackage(java.net);
    importPackage(java.io);
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

    importClass(com.tinkerpop.blueprints.util.io.gml.GMLReader);
    importClass(com.tinkerpop.blueprints.util.io.gml.GMLWriter);
    importClass(com.tinkerpop.blueprints.util.io.graphml.GraphMLReader);
    importClass(com.tinkerpop.blueprints.util.io.graphml.GraphMLWriter);
    importClass(com.tinkerpop.blueprints.util.io.graphson.GraphSONReader);
    importClass(com.tinkerpop.blueprints.util.io.graphson.GraphSONWriter);
    importClass(com.tinkerpop.blueprints.util.io.graphson.GraphSONMode);


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
        steps = {'v':true, 'e': true, 'V': true, 'E': true},
        unpipedFuncs = ['toString', 'toList', 'toArray', 'version', 'language'];

    fn.include = function (array, i) {
        return indexOf.call(array, i) === -1 ? false : true;
    };

    Function.prototype.pipe = function () {
        var that = this;
        return function () {
            var args = slice.call(arguments);

            print(that.name);
            print(that);
            if (isStep(that.name)) {
              //  print('is true step');
                 this.pipeline = !!args.length ? that.apply(this, args) : that.call(this);
            } else {
            //     print('something wrong');
                return !!args.length ? that.apply(this.graph, args) : that.call(this.graph);
            }
            
            return this;
        };
    };

    //pipe enable all Gremlin functions except unpiped functions
    function pipe() {
        var func, self = this;
        for (func in self) {
            if (typeof self[func] === "function" && !fn.include(unpipedFuncs, func)) {
                self[func] = self[func].pipe();
                print(func);
            }
        }
        return self;
    }

    function out(labels) {
        var args = slice.call(arguments);
        return !!args.length ? compose(this.pipeline).add(new OutPipe(args)) :
            compose(this.pipeline).add(new OutPipe());
    }

    function _in(labels) {
        var args = slice.call(arguments);
        return !!args.length ? compose(this.pipeline).add(new InPipe(args)) :
            compose(this.pipeline).add(new InPipe());
    }
    function id() {
        return compose(this.pipeline).add(new IdPipe());
    }
    function toList() {
        return this.pipeline.toList();
    }
    function toArray() {
        var list = [],
            iterator = this.pipeline.toList().iterator();
        while (iterator.hasNext()) {
            push.call(list, iterator.next());
        }
        return list;
    }
    function v() {
        var args = slice.call(arguments),
            vertices = [];

        for (var i = 0; i < args.length; i++) {
            push.call(vertices, this.graph.getVertex(args[i]));
        };
        
        return compose(vertices);
    }
    function V() {
        var args = slice.call(arguments),
            vertices;

        vertices = !!args.length ? this.graph.getVertices(args[0], args[1]) : this.graph.getVertices();

        return compose(vertices);
    }

    function E() {
        var args = slice.call(arguments)
            edges;

        edges = !!args.length ? this.graph.getEdges(args[0], args[1]) : this.graph.getEdges();
        return compose(edges);
    }

    function e() {
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
        //addData.call(this);
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
            hop = ({}).hasOwnProperty;

        //Load Pipeline
        for (func in this.pipeline) {
            if (hop.call(this.pipeline, func)) {
                if (func === 'currentPath') { //Need to figure this out??
                } else 
                if (typeof this.pipeline[func] === "function") {
                    if (!!!this[func]) {
                        this.__proto__[func] = this.pipeline[func];
                    }
                    (func === 'in') ? addStep.call(this, '_in') : addStep.call(this, func);
                }
            }
        }

        //Load Graph
        for (func in this.graph) {
            if (typeof this.graph[func] === "function") {
                this.__proto__[func] = this.graph[func];
            }
        }


        // // ElementLoader.load();
        // Element.metaClass.map = {
        //     final Map<String, Object> map = new HashMap<String, Object>();
        //     for (final String key: ((Element) delegate).getPropertyKeys()) {
        //         map.put(key, ((Element) delegate).getProperty(key))
        //     }
        //     return map;
        // }

        // Element.metaClass.keys = {
        //     return ((Element) delegate).getPropertyKeys()
        // }

        // Element.metaClass.values = {
        //     final List values = new ArrayList();
        //     for (final String key: ((Element) delegate).getPropertyKeys()) {
        //         values.add(((Element) delegate).getProperty(key))
        //     }
        //     return values;
        // }
        // // GraphLoader.load(); //ok
        // // IndexLoader.load();
        //         IndexableGraph.metaClass.idx = {final Object indexName ->
        //     return ((IndexableGraph) delegate).getIndices().find {it.getIndexName().equals(indexName)}
        // }

        // Index.metaClass.getAt = {final Map query ->
        //     final Map.Entry entry = (Map.Entry) query.iterator().next();
        //     return new GremlinGroovyPipeline().start((((Index) delegate).get((String) entry.getKey(), entry.getValue())));
        // }
        // // ObjectLoader.load();
        // Object.metaClass._ = {final Closure closure ->
        //     return new GremlinGroovyPipeline(delegate.iterator());
        // }

        // Map.metaClass.getAt = {final IntRange range ->
        //     final int size = delegate.size();
        //     int high = Math.min(size - 1, range.max());
        //     int low = Math.max(0, range.min());

        //     final Map tempMap = new LinkedHashMap();
        //     int c = 0;
        //     for (final Map.Entry entry: delegate.entrySet()) {
        //         if (c >= low && c <= high) {
        //             tempMap.put(entry.getKey(), entry.getValue());
        //         }
        //         if (c > high) {
        //             break;
        //         }
        //         c++;

        //     }
        //     return tempMap;


        // }

        // Table.metaClass.apply = {final Closure... closures ->
        //     return ((Table) delegate).apply(GroovyPipeFunction.generate(closures));

        // }

        // Table.metaClass.unique = {final Closure closure ->
        //     final Table temp = Table.cloneTableStructure((Table) delegate);
        //     for (final Row row: delegate.iterator().unique(closure)) {
        //         temp.addRow(row);
        //     }
        //     return temp;
        // }

        // Table.metaClass.sort = {final Closure closure ->
        //     final Table temp = Table.cloneTableStructure((Table) delegate);
        //     for (final Row row: delegate.iterator().sort(closure)) {
        //         temp.addRow(row);
        //     }
        //     return temp;
        // }
        // // PipeLoader.load();
        // [Iterable, Iterator].each {
        //     it.metaClass.count = {
        //         return PipeHelper.counter(delegate.iterator());
        //     }
        // }

        // [Iterable, Iterator].each {
        //     it.metaClass.mean = {
        //         double counter = 0;
        //         double sum = 0;
        //         delegate.each {counter++; sum += it;}
        //         return sum / counter;
        //     }
        // }

        // GremlinGroovyPipeline.metaClass.getAt = {final Integer index ->
        //     return ((GremlinGroovyPipeline) delegate).range(index, index);
        // }


        // GremlinGroovyPipeline.metaClass.getAt = {final Range range ->
        //     return ((GremlinGroovyPipeline) delegate).range(range.getFrom() as Integer, range.getTo() as Integer);
        // }

        // //if Graph instance of SailGraph || typeof SailGraph ??
        // // try {
        // //     SailGraphLoader.load();

        // SailGraph.metaClass.uri {final String prefix ->
        //     return ((SailGraph) delegate).expandPrefix(prefix)
        // }

        // SailGraph.metaClass.qn {final String uri ->
        //     return ((SailGraph) delegate).prefixNamespace(uri)
        // }

        // SailGraph.metaClass.loadRDF = {final def fileObject, final String format ->
        //     try {
        //         ((SailGraph) delegate).loadRDF(new URL(fileObject).openStream(), "", format, null);
        //     } catch (MalformedURLException e) {
        //         ((SailGraph) delegate).loadRDF(new FileInputStream(fileObject), "", format, null);
        //     }
        // }
        // // } catch (Throwable e) {
        // //     // this means that SailGraph was not in the dependency
        // //     // that is ok
        // //}

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


    Gremlin.toString = function () { return "gremlin-js - " + Tokens.VERSION; };

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

    function loadGraphSON(fileObject) {
        try {
            GraphSONReader.inputGraph(this, new URL(fileObject).openStream());
        } catch (e) {
            GraphSONReader.inputGraph(this, new FileInputStream(fileObject))
        }
    }

    function saveGraphSON(fileObject) {
        GraphSONWriter.outputGraph(this, new FileOutputStream(fileObject), GraphSONMode.NORMAL)
    }

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

    Gremlin.prototype.out = out;
    Gremlin.prototype.in = _in;
    // Gremlin.prototype.has = has;
    // Gremlin.prototype.hasNot = hasNot;
    // Gremlin.prototype.interval = interval;
    // Gremlin.prototype.bothE = bothE;
    // Gremlin.prototype.both = both;
    // Gremlin.prototype.bothV = bothV;
    // Gremlin.prototype.idEdge = idEdge;
    // Gremlin.prototype.id = id;
    // Gremlin.prototype.idVertex = idVertex;
    // Gremlin.prototype.inE = inE;
    // Gremlin.prototype.inV = inV;
    // Gremlin.prototype.label = label;
    // Gremlin.prototype.outE = outE;
    // Gremlin.prototype.outV = outV;
    // Gremlin.prototype.map = map;
    // Gremlin.prototype.property = property;
    Gremlin.prototype.toList = toList;
    Gremlin.prototype.toArray = toArray;

    Gremlin.prototype.loadGraphSON = loadGraphSON;
    Gremlin.prototype.saveGraphSON = saveGraphSON;


    if (freeExports) {
        //if (typeof module == 'object' && module && module.exports == freeExports) {
          (module.exports = Gremlin).Gremlin = Gremlin;
        //}
    }

}(this));
