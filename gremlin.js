/*
    --xjava -cp js.jar:./classes:./classes/* org.mozilla.javascript.tools.shell.Main -modules gremlin.js -debug
    ==>java -cp js.jar:./classes:./classes/* org.mozilla.javascript.tools.shell.Main -modules . -debug
    var g = require('gremlin.js')
*/

;(function (scope) {

    // importClass(com.tinkerpop.gremlin.Tokens);
    // importClass(com.tinkerpop.blueprints.Vertex);

    importPackage(Packages.com.tinkerpop.pipes);
    importPackage(Packages.com.tinkerpop.gremlin.java);
    // importPackage(Packages.com.tinkerpop.pipes.sideeffect);
    // importPackage(Packages.com.tinkerpop.pipes.filter);
    // importPackage(Packages.com.tinkerpop.pipes.transform);
    // importPackage(Packages.com.tinkerpop.pipes.util.structures);
    // importPackage(Packages.com.tinkerpop.blueprints);
    // //importPackage(Packages.com.tinkerpop.gremlin);
    //importPackage(Packages.com.tinkerpop.gremlin.java);


//importPackage(com.tinkerpop.pipes.util);

//import com.tinkerpop.pipes.Pipe;

// importClass(java.util.ArrayList);
// importClass(java.util.Arrays);
// importClass(java.util.Collection);
// importClass(java.util.Iterator);
// importClass(java.util.List);

    importClass(com.tinkerpop.gremlin.java.GremlinPipeline);
    //importClass(com.tinkerpop.gremlin.java.GremlinFluentPipeline);

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

    importClass(java.util.ArrayList);
    importClass(java.util.Collection);
    importClass(java.util.List);
    importClass(java.util.Map);

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
        fn = {};

    fn.include = function (array, i) {
        return indexOf.call(array, i) === -1 ? false : true;
    };

    Function.prototype.delegate = function (ctx) {
        var that = this,
            thisObj = ctx;//slice.call(arguments);
        return function () {
            var args = slice.call(arguments);
            // return !!args.length ? that.apply(this.graph, args) : that.call(this.graph);



var pipeObj = new GremlinPipeline(args);

                print(thisObj);
                print(args);
print('index: '+args[0]);

 var list = [];//new ArrayList();
             iterator = pipeObj.iterator();
            while (iterator.hasNext()) {
                //list.add(func.call(iterator));
                
                push.call(list, that.call(iterator.next()));
            }
            print(list);
            // var pipe = new GremlinPipeline(list);
            // print(pipe.toList());
            //this.add(pipe);
           
            return list;//new GremlinJSPipeline(this);
            //return func.call(this, it);



            //return that.call();//!!args.length ? that.apply(pipeObj) : that.call(pipeObj);
        };
    };

    // pipe enable all Gremlin functions except unpiped functions
    // function delegate() {
    //     var func, self = this;
    //     for (func in self) {
    //         if (typeof self[func] === "function" && !fn.include(unpipedFuncs, func)) {
    //             self[func] = self[func].pipe();
    //             //print(func);
    //         }
    //     }
    //     return self;
    // }

    function compose (start, pipe) {
         
        var gremlinJSPipeline, gremlinPipeline;

        if (start instanceof GremlinPipeline) {
            gremlinJSPipeline = new GremlinJSPipeline(start);
            if (null != pipe)
                gremlinJSPipeline.addPipe(pipe);
        } else if (start instanceof Pipe) {
            gremlinPipeline = new GremlinPipeline();
            gremlinPipeline.addPipe(start);
            if (null != pipe) {
                gremlinPipeline.addPipe(pipe);
            }
            gremlinJSPipeline = new GremlinJSPipeline(gremlinPipeline)
        } else {
            gremlinPipeline = new GremlinPipeline(start);
            if (null != pipe){
                gremlinPipeline.addPipe(pipe);
            }
            gremlinJSPipeline = new GremlinJSPipeline(gremlinPipeline);
        }
        return gremlinJSPipeline;
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

    function e() {
        var args = slice.call(arguments),
            edges = [];

        for (var i = 0; i < args.length; i++) {
            push.call(edges, this.graph.getEdge(args[i]));
        };
        return compose(edges);
    }

    function E() {
        var args = slice.call(arguments),
            edges;

        edges = !!args.length ? this.graph.getEdges(args[0], args[1]) : this.graph.getEdges();
        return compose(edges);
    }

    /**
     * @author Frank Panetta
     */
    function Gremlin(newGraph) {
        this.graph = newGraph;

        this.toString = function () {
            return this.graph.toString();
        }

        load.call(this);
        return this;//pipe.call(this);
    }

    Gremlin.setGraph = function() {
        var args = slice.call(arguments);
        if (!!!args[0] || !(args[0] instanceof Graph)) {
            //Throw error
            print('Please specify a graph database');
            gremlin = null;
            return;
        }
        print(args[0].toString());
        return new Gremlin(args[0]);
    }

    function load() {

        var func,
            hop = ({}).hasOwnProperty;

        //Load Graph
        for (func in this.graph) {
            if (typeof this.graph[func] === 'function' && func !== 'toString') {
                this.__proto__[func] = this.graph[func];
                this[func] = this[func].delegate();
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

function GremlinJSPipeline(arg) {
    
    var gremlinPipeline
        doQueryOptimization = true,
        //endPipe,
        self = this;

    if (!arg) {
        gremlinPipeline = new GremlinPipeline();
    } else {
        gremlinPipeline = arg;
    }

    // this needs to go into compose() -- maybe? ---------------------------------------------------
    // public GremlinPipeline(final Object starts, final boolean doQueryOptimization) {
    //     super(new StartPipe(starts));
    //     this.doQueryOptimization = doQueryOptimization;
    //     FluentUtility.setStarts(this, starts);
    // }
    var mapFilter = {
        'eq': FilterPipe.Filter.EQUAL,
        'neq': FilterPipe.Filter.NOT_EQUAL,
        'lt': FilterPipe.Filter.LESS_THAN,
        'lte': FilterPipe.Filter.LESS_THAN_EQUAL,
        'gt': FilterPipe.Filter.GREATER_THAN,
        'gte': FilterPipe.Filter.GREATER_THAN_EQUAL
    }

    var mapFlipFilter = {
        'eq': FilterPipe.Filter.NOT_EQUAL,
        'neq': FilterPipe.Filter.EQUAL,
        'lt': FilterPipe.Filter.GREATER_THAN_EQUAL,
        'lte': FilterPipe.Filter.GREATER_THAN,
        'gt': FilterPipe.Filter.LESS_THAN_EQUAL,
        'gte': FilterPipe.Filter.LESS_THAN
    }

    var jsAbstractPipe = {
        processNextStart: function(){
            return this.compute(this.starts);
        },
        toString: function() {
            return 'jsFunctionPipe';
        },
        compute: undefined
    }

    return {
        step: function(aFunction) {
            var jsPipeFunction = {};
            jsAbstractPipe.compute = aFunction;
            var jsFunctionPipe = new JavaAdapter(AbstractPipe, jsAbstractPipe);

            jsPipeFunction.compute = aFunction;
            return this.add(new FunctionPipe(new PipeFunction(jsPipeFunction)));
        },
        toString: function() { return gremlinPipeline.toList().toString(); },
        
        id: function() {
            return this.add(new IdPipe());
        },
        toList: function() {
            return gremlinPipeline.toList();
        },
        toArray: function() {
            var list = [],
            iterator = gremlinPipeline.toList().iterator();
            while (iterator.hasNext()) {
                push.call(list, iterator.next());
            }
            return list;
        },
        out: function() {
            var labels = slice.call(arguments);
            return !!labels.length ? this.add(new OutPipe(labels)) :
                this.add(new OutPipe());
        },

        in: function() {
            var labels = slice.call(arguments);
            return !!labels.length ? this.add(new InPipe(labels)) :
                this.add(new InPipe());
        },
        add: function(arg) {
            return new GremlinJSPipeline(gremlinPipeline.add(arg));
        },        

        has: function() {
            var args = slice.call(arguments),
                key = args[0],
                comparison,
                value,
                filter;

            if (args.length === 2) {
                
                value = args[1];
                if (key.equals(Tokens.ID)) {
                    return this.add(new IdFilterPipe(value, FilterPipe.Filter.EQUAL));
                } else if (key.equals(Tokens.LABEL)) {
                    return this.add(new LabelFilterPipe(value, FilterPipe.Filter.EQUAL));
                } else {
                    return this.add(new PropertyFilterPipe(key, value, FilterPipe.Filter.EQUAL));
                }
                return;
            }
            comparison = args[1];
            value = args[2];
            filter = mapFilter[comparison];
            if (key.equals(Tokens.ID)) {
                return this.add(new IdFilterPipe(value, filter));
            } else if (key.equals(Tokens.LABEL)) {
                return this.add(new LabelFilterPipe(value, filter));
            } else {
                return this.add(new PropertyFilterPipe(key, value, filter));
            }

        },

        hasNot: function() {
            var args = slice.call(arguments),
                key = args[0],
                comparison,
                value,
                filter;

            if (args.length === 2) {
                
                value = args[1];
                if (key.equals(Tokens.ID)) {
                    return this.add(new IdFilterPipe(value, FilterPipe.Filter.NOT_EQUAL));
                } else if (key.equals(Tokens.LABEL)) {
                    return this.add(new LabelFilterPipe(value, FilterPipe.Filter.NOT_EQUAL));
                } else {
                    return this.add(new PropertyFilterPipe(key, value, FilterPipe.Filter.NOT_EQUAL));
                }
                return;
            }
            comparison = args[1];
            value = args[2];
            filter = mapFlipFilter[comparison];
            if (key.equals(Tokens.ID)) {
                return this.add(new IdFilterPipe(value, filter));
            } else if (key.equals(Tokens.LABEL)) {
                return this.add(new LabelFilterPipe(value, filter));
            } else {
                return this.add(new PropertyFilterPipe(key, value, filter));
            }

        },
        interval: function(key, startValue, endValue) {
            return this.add(new IntervalFilterPipe(key, startValue, endValue));
        },
        bothE: function() {
            var labels = slice.call(arguments);
            return !!labels.length ? this.add(new BothEdgesPipe(labels)) : this.add(new BothEdgesPipe());
        },
        both: function() {
            var labels = slice.call(arguments);
            return !!labels.length ? this.add(new BothPipe(labels)) : this.add(new BothPipe());
        },
        bothV: function() {
            if (doQueryOptimization) {
                gremlinPipeline = GremlinFluentUtility.optimizePipelineForVertexQueries(gremlinPipeline);
            }

            return this.add(new BothVerticesPipe());
        },
        //Need to verify
        idEdge: function(graph) {
            return this.add(new IdEdgePipe(graph));
        },
        idVertex: function(graph) {
            return this.add(new IdVertexPipe(graph));
        },
        inE: function() {
            var labels = slice.call(arguments);
                return !!labels.length ? this.add(new InEdgesPipe(labels)) : this.add(new InEdgesPipe());
        },
        inV: function() {
            if (doQueryOptimization)
                gremlinPipeline = GremlinFluentUtility.optimizePipelineForVertexQueries(gremlinPipeline);

            return this.add(new InVertexPipe());
        },
        label: function() {
            return this.add(new LabelPipe());
        },
        outE: function() {
            var labels = slice.call(arguments);
                return !!labels.length ? this.add(new OutEdgesPipe(labels)) : this.add(new OutEdgesPipe());
        },

        outV: function() {
            if (doQueryOptimization)
                gremlinPipeline = GremlinFluentUtility.optimizePipelineForVertexQueries(gremlinPipeline);

            return this.add(new OutVertexPipe());
        },
        map: function() {
            return this.add(new PropertyMapPipe());
        },
        property: function(key) {
            return this.add(new PropertyPipe(key));
        },
        /**
         * Add a FunctionPipe to the end of the pipeline.
         * The provide provided PipeFunction emits whatever is defined by the function.
         * This serves as an arbitrary step computation.
         *
         * @param function the function of the FunctionPipe
         * @return the extended Pipeline


         g.v(1).out.step{ it.next().map() }
            ==>{name=vadas, age=27}
            ==>{name=lop, lang=java}
            ==>{name=josh, age=32}


         */

        /**
         * Return the next X objects in the pipeline as a list.
         *
         * @param number the number of objects to return
         * @return a list of X objects (if X objects occur)
         */
        // next: function(num) {
        //     var list = new ArrayList(num);
        //     PipeHelper.fillCollection(gremlinPipeline, list, num);
        //     return list;
        // },
        // next: function() {
        //     return this.endPipe.next();
        // },

        count: function() {
            return PipeHelper.counter(gremlinPipeline);
        }

/*


//     /**
//      * Add a FunctionPipe to the end of the pipeline.
//      * The provide provided PipeFunction emits whatever is defined by the function.
//      * This serves as an arbitrary step computation.
//      *
//      * @param function the function of the FunctionPipe
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, ?> step(final PipeFunction function) {
//         return this.add(new FunctionPipe(function));
//     }

//     /**
//      * Add an arbitrary Pipe to the end of the pipeline.
//      *
//      * @param pipe The provided pipe.
//      * @param <T>  the object type emitted by the provided pipe.
//      * @return the extended Pipeline
//      */
//     public <T> GremlinPipeline<S, T> step(final Pipe<E, T> pipe) {
//         return this.add(pipe);
//     }

//     ////////////////////
//     /// BRANCH PIPES ///
//     ////////////////////

//     /**
//      * Add a CopySplitPipe to the end of the pipeline.
//      * The incoming objects are copied to the provided pipes.
//      * This "split-pipe" is used in conjunction with some type of "merge-pipe."
//      *
//      * @param pipes the internal pipes of the CopySplitPipe
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, ?> copySplit(final Pipe<E, ?>... pipes) {
//         return this.add(new CopySplitPipe(pipes));
//     }

//     /**
//      * Add an ExhaustMergePipe to the end of the pipeline.
//      * The one-step previous MetaPipe in the pipeline's pipes are used as the internal pipes.
//      * The pipes' emitted objects are merged where the first pipe's objects are exhausted, then the second, etc.
//      *
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, ?> exhaustMerge() {
//         return this.add(new ExhaustMergePipe(((MetaPipe) FluentUtility.getPreviousPipe(this)).getPipes()));
//     }

//     /**
//      * Add a FairMergePipe to the end of the Pipeline.
//      * The one-step previous MetaPipe in the pipeline's pipes are used as the internal pipes.
//      * The pipes' emitted objects are merged in a round robin fashion.
//      *
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, ?> fairMerge() {
//         return this.add(new FairMergePipe(((MetaPipe) FluentUtility.getPreviousPipe(this)).getPipes()));
//     }

//     /**
//      * Add an IfThenElsePipe to the end of the Pipeline.
//      * If the ifFunction is true, then the results of the thenFunction are emitted.
//      * If the ifFunction is false, then the results of the elseFunction are emitted.
//      *
//      * @param ifFunction   the function denoting the "if" part of the pipe
//      * @param thenFunction the function denoting the "then" part of the pipe
//      * @param elseFunction the function denoting the "else" part of the pipe
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, ?> ifThenElse(final PipeFunction<E, Boolean> ifFunction, final PipeFunction<E, ?> thenFunction, final PipeFunction<E, ?> elseFunction) {
//         return this.add(new IfThenElsePipe(ifFunction, thenFunction, elseFunction));
//     }

//     /**
//      * Add a LoopPipe to the end of the Pipeline.
//      * Looping is useful for repeating a section of a pipeline.
//      * The provided whileFunction determines when to drop out of the loop.
//      * The whileFunction is provided a LoopBundle object which contains the object in loop along with other useful metadata.
//      *
//      * @param numberedStep  the number of steps to loop back to
//      * @param whileFunction whether or not to continue looping on the current object
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> loop(final int numberedStep, final PipeFunction<LoopPipe.LoopBundle<E>, Boolean> whileFunction) {
//         return this.add(new LoopPipe(new Pipeline(FluentUtility.removePreviousPipes(this, numberedStep)), whileFunction));
//     }

//     /**
//      * Add a LoopPipe to the end of the Pipeline.
//      * Looping is useful for repeating a section of a pipeline.
//      * The provided whileFunction determines when to drop out of the loop.
//      * The whileFunction is provided a LoopBundle object which contains the object in loop along with other useful metadata.
//      *
//      * @param namedStep     the name of the step to loop back to
//      * @param whileFunction whether or not to continue looping on the current object
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> loop(final String namedStep, final PipeFunction<LoopPipe.LoopBundle<E>, Boolean> whileFunction) {
//         return this.add(new LoopPipe(new Pipeline(FluentUtility.removePreviousPipes(this, namedStep)), whileFunction));
//     }

//     /**
//      * Add a LoopPipe to the end of the Pipeline.
//      * Looping is useful for repeating a section of a pipeline.
//      * The provided whileFunction determines when to drop out of the loop.
//      * The provided emitFunction can be used to emit objects that are still going through a loop.
//      * The whileFunction and emitFunctions are provided a LoopBundle object which contains the object in loop along with other useful metadata.
//      *
//      * @param numberedStep  the number of steps to loop back to
//      * @param whileFunction whether or not to continue looping on the current object
//      * @param emitFunction  whether or not to emit the current object (irrespective of looping)
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> loop(final int numberedStep, final PipeFunction<LoopPipe.LoopBundle<E>, Boolean> whileFunction, final PipeFunction<LoopPipe.LoopBundle<E>, Boolean> emitFunction) {
//         return this.add(new LoopPipe(new Pipeline(FluentUtility.removePreviousPipes(this, numberedStep)), whileFunction, emitFunction));
//     }

//     /**
//      * Add a LoopPipe to the end of the Pipeline.
//      * Looping is useful for repeating a section of a pipeline.
//      * The provided whileFunction determines when to drop out of the loop.
//      * The provided emitFunction can be used to emit objects that are still going through a loop.
//      * The whileFunction and emitFunctions are provided a LoopBundle object which contains the object in loop along with other useful metadata.
//      *
//      * @param namedStep     the number of steps to loop back to
//      * @param whileFunction whether or not to continue looping on the current object
//      * @param emitFunction  whether or not to emit the current object (irrespective of looping)
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> loop(final String namedStep, final PipeFunction<LoopPipe.LoopBundle<E>, Boolean> whileFunction, final PipeFunction<LoopPipe.LoopBundle<E>, Boolean> emitFunction) {
//         return this.add(new LoopPipe(new Pipeline(FluentUtility.removePreviousPipes(this, namedStep)), whileFunction, emitFunction));
//     }

//     ////////////////////
//     /// FILTER PIPES ///
//     ////////////////////

//     /**
//      * Add an AndFilterPipe to the end the Pipeline.
//      * If the internal pipes all yield objects, then the object is not filtered.
//      * The provided pipes are provided the object as their starts.
//      *
//      * @param pipes the internal pipes of the AndFilterPipe
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> and(final Pipe<E, ?>... pipes) {
//         return this.add(new AndFilterPipe<E>(pipes));
//     }

//     /**
//      * Add a BackFilterPipe to the end of the Pipeline.
//      * The object that was seen numberedSteps ago is emitted.
//      *
//      * @param numberedStep the number of steps previous to back up to
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, ?> back(final int numberedStep) {
//         return this.add(new BackFilterPipe(new Pipeline(FluentUtility.removePreviousPipes(this, numberedStep))));
//     }

//     /**
//      * Add a BackFilterPipe to the end of the Pipeline.
//      * The object that was seen namedSteps ago is emitted.
//      *
//      * @param namedStep the name of the step previous to back up to
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, ?> back(final String namedStep) {
//         return this.add(new BackFilterPipe(new Pipeline(FluentUtility.removePreviousPipes(this, namedStep))));
//     }

//     /**
//      * Add a DuplicateFilterPipe to the end of the Pipeline.
//      * Will only emit the object if it has not been seen before.
//      *
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> dedup() {
//         return this.add(new DuplicateFilterPipe<E>());
//     }

//     /**
//      * Add a DuplicateFilterPipe to the end of the Pipeline.
//      * Will only emit the object if the object generated by its function hasn't been seen before.
//      *
//      * @param dedupFunction a function to call on the object to yield the object to dedup on
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> dedup(final PipeFunction<E, ?> dedupFunction) {
//         return this.add(new DuplicateFilterPipe<E>(dedupFunction));
//     }

//     /**
//      * Add an ExceptFilterPipe to the end of the Pipeline.
//      * Will only emit the object if it is not in the provided collection.
//      *
//      * @param collection the collection except from the stream
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> except(final Collection<E> collection) {
//         return this.add(new ExceptFilterPipe<E>(collection));
//     }

//     /**
//      * Add an FilterFunctionPipe to the end of the Pipeline.
//      * The serves are an arbitrary filter where the filter criteria is provided by the filterFunction.
//      *
//      * @param filterFunction the filter function of the pipe
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> filter(final PipeFunction<E, Boolean> filterFunction) {
//         return this.add(new FilterFunctionPipe<E>(filterFunction));
//     }

//     /**
//      * Add an OrFilterPipe to the end the Pipeline.
//      * Will only emit the object if one or more of the provides pipes yields an object.
//      * The provided pipes are provided the object as their starts.
//      *
//      * @param pipes the internal pipes of the OrFilterPipe
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> or(final Pipe<E, ?>... pipes) {
//         return this.add(new OrFilterPipe<E>(pipes));
//     }

//     /**
//      * Add a RandomFilterPipe to the end of the Pipeline.
//      * A biased coin toss determines if the object is emitted or not.
//      *
//      * @param bias the bias of the random coin
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> random(final Double bias) {
//         return this.add(new RandomFilterPipe<E>(bias));
//     }

//     /**
//      * Add a RageFilterPipe to the end of the Pipeline.
//      * Analogous to a high/low index lookup.
//      *
//      * @param low  the low end of the range
//      * @param high the high end of the range
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> range(final int low, final int high) {
//         return this.add(new RangeFilterPipe<E>(low, high));
//     }

//     /**
//      * Add a RetainFilterPipe to the end of the Pipeline.
//      * Will emit the object only if it is in the provided collection.
//      *
//      * @param collection the collection to retain
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> retain(final Collection<E> collection) {
//         return this.add(new RetainFilterPipe<E>(collection));
//     }

//     /**
//      * Add a CyclicPathFilterPipe to the end of the Pipeline.
//      * If the object's path is repeating (looping), then the object is filtered.
//      * Thus, what is emitted are those objects whose history is composed of unique objects.
//      *
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> simplePath() {
//         return this.add(new CyclicPathFilterPipe<E>());
//     }

//     /////////////////////////
//     /// SIDE-EFFECT PIPES ///
//     /////////////////////////

//     /**
//      * Add an AggregatePipe to the end of the Pipeline.
//      * The objects prior to aggregate are greedily collected into an ArrayList.
//      *
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> aggregate() {
//         return this.aggregate(new ArrayList<E>());
//     }

//     /**
//      * Add an AggregatePipe to the end of the Pipeline.
//      * The objects prior to aggregate are greedily collected into the provided collection.
//      *
//      * @param aggregate the collection to aggregate results into
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> aggregate(final Collection<E> aggregate) {
//         return this.add(new AggregatePipe<E>(aggregate));
//     }

//     /**
//      * Add an AggregatePipe to the end of the Pipeline.
//      * The results of the function evaluated on the objects prior to the aggregate are greedily collected into the provided collection.
//      *
//      * @param aggregate         the collection to aggregate results into
//      * @param aggregateFunction the function to run over each object prior to insertion into the aggregate
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> aggregate(final Collection aggregate, final PipeFunction<E, ?> aggregateFunction) {
//         return this.add(new AggregatePipe<E>(aggregate, aggregateFunction));
//     }

//     /**
//      * Add an AggregatePipe to the end of the Pipeline.
//      * The results of the function evaluated on the objects prior to the aggregate are greedily collected into an ArrayList.
//      *
//      * @param aggregateFunction the function to run over each object prior to insertion into the aggregate
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> aggregate(final PipeFunction<E, ?> aggregateFunction) {
//         return this.aggregate(new ArrayList(), aggregateFunction);
//     }

//     /**
//      * Add an OptionalPipe to the end of the Pipeline.
//      * The section of pipeline back to the numbered step is evaluated.
//      *
//      * @param numberedStep the number of steps previous to optional back to
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, ?> optional(final int numberedStep) {
//         return this.add(new OptionalPipe(new Pipeline(FluentUtility.removePreviousPipes(this, numberedStep))));
//     }

//     /**
//      * Add an OptionalPipe to the end of the Pipeline.
//      * The section of pipeline back to the partition step is evaluated.
//      *
//      * @param namedStep the name of the step previous to optional back to
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, ?> optional(final String namedStep) {
//         return this.add(new OptionalPipe(new Pipeline(FluentUtility.removePreviousPipes(this, namedStep))));
//     }

//     /**
//      * Add a GroupByPipe to the end of the Pipeline.
//      * Group the objects inputted objects according to a key generated from the object and a value generated from the object.
//      * The grouping map has values that are Lists.
//      *
//      * @param map           the map to store the grouping in
//      * @param keyFunction   the function that generates the key from the object
//      * @param valueFunction the function that generates the value from the function
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> groupBy(final Map<?, List<?>> map, final PipeFunction keyFunction, final PipeFunction valueFunction) {
//         return this.add(new GroupByPipe(map, keyFunction, valueFunction));
//     }

//     /**
//      * Add a GroupByPipe to the end of the Pipeline.
//      * Group the objects inputted objects according to a key generated from the object and a value generated from the object.
//      * The grouping map has values that are Lists.
//      *
//      * @param keyFunction   the function that generates the key from the object
//      * @param valueFunction the function that generates the value from the function
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> groupBy(final PipeFunction keyFunction, final PipeFunction valueFunction) {
//         return this.add(new GroupByPipe(keyFunction, valueFunction));
//     }

//     /**
//      * Add a GroupByReducePipe to the end of the Pipeline.
//      * Group the objects inputted objects according to a key generated from the object and a value generated from the object.
//      * The grouping map has values that are Lists.
//      * When the pipe has no more incoming objects, apply the reduce function to the keyed Lists.
//      * The sideEffect is only fully available when the pipe is empty.
//      *
//      * @param reduceMap      a map to perform the reduce operation on (good for having a later reference)
//      * @param keyFunction    the function that generates the key from the object
//      * @param valueFunction  the function that generates the value from the function
//      * @param reduceFunction the function that reduces the value lists
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> groupBy(final Map reduceMap, final PipeFunction keyFunction, final PipeFunction valueFunction, final PipeFunction reduceFunction) {
//         return this.add(new GroupByReducePipe(reduceMap, keyFunction, valueFunction, reduceFunction));
//     }

//     *
//      * Add a GroupByReducePipe to the end of the Pipeline.
//      * Group the objects inputted objects according to a key generated from the object and a value generated from the object.
//      * The grouping map has values that are Lists.
//      * When the pipe has no more incoming objects, apply the reduce function to the keyed Lists.
//      * The sideEffect is only fully available when the pipe is empty.
//      *
//      * @param keyFunction    the function that generates the key from the object
//      * @param valueFunction  the function that generates the value from the function
//      * @param reduceFunction the function that reduces the value lists
//      * @return the extended Pipeline
     
//     public GremlinPipeline<S, E> groupBy(final PipeFunction keyFunction, final PipeFunction valueFunction, final PipeFunction reduceFunction) {
//         return this.add(new GroupByReducePipe(keyFunction, valueFunction, reduceFunction));
//     }

//     /**
//      * Add a GroupCountPipe or GroupCountFunctionPipe to the end of the Pipeline.
//      * A map is maintained of counts.
//      * The map keys are determined by the function on the incoming object.
//      * The map values are determined by the function on the incoming object (getA()) and the previous value (getB()).
//      *
//      * @param map           a provided count map
//      * @param keyFunction   the key function to determine map key
//      * @param valueFunction the value function to determine map value
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> groupCount(final Map<?, Number> map, final PipeFunction keyFunction, final PipeFunction<Pair<?, Number>, Number> valueFunction) {
//         return this.add(new GroupCountFunctionPipe(map, keyFunction, valueFunction));
//     }

//     /**
//      * Add a GroupCountPipe or GroupCountFunctionPipe to the end of the Pipeline.
//      * map is maintained of counts.
//      * The map keys are determined by the function on the incoming object.
//      * The map values are determined by the function on the incoming object (getA()) and the previous value (getB()).
//      *
//      * @param keyFunction   the key function to determine map key
//      * @param valueFunction the value function to determine map value
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> groupCount(final PipeFunction keyFunction, final PipeFunction<Pair<?, Number>, Number> valueFunction) {
//         return this.add(new GroupCountFunctionPipe(keyFunction, valueFunction));
//     }

//     /**
//      * Add a GroupCountPipe or GroupCountFunctionPipe to the end of the Pipeline.
//      * A map is maintained of counts.
//      * The map keys are determined by the function on the incoming object.
//      * The map values are 1 plus the previous value for that key.
//      *
//      * @param map         a provided count map
//      * @param keyFunction the key function to determine map key
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> groupCount(final Map<?, Number> map, final PipeFunction keyFunction) {
//         return this.add(new GroupCountFunctionPipe(map, keyFunction, null));
//     }

//     /**
//      * Add a GroupCountPipe or GroupCountFunctionPipe to the end of the Pipeline.
//      * A map is maintained of counts.
//      * The map keys are determined by the function on the incoming object.
//      * The map values are 1 plus the previous value for that key.
//      *
//      * @param keyFunction the key function to determine map key
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> groupCount(final PipeFunction keyFunction) {
//         return this.add(new GroupCountFunctionPipe(keyFunction, null));
//     }

//     /**
//      * Add a GroupCountPipe to the end of the Pipeline.
//      * A map is maintained of counts.
//      * The map keys are the incoming objects.
//      * The map values are 1 plus the previous value for that key.
//      *
//      * @param map a provided count map
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> groupCount(final Map<?, Number> map) {
//         return this.add(new GroupCountPipe(map));
//     }

//     /**
//      * Add a GroupCountPipe to the end of the Pipeline.
//      * A map is maintained of counts.
//      * The map keys are the incoming objects.
//      * The map values are 1 plus the previous value for that key.
//      *
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> groupCount() {
//         return this.add(new GroupCountPipe());
//     }

//     /**
//      * Add a SideEffectFunctionPipe to the end of the Pipeline.
//      * The provided function is evaluated and the incoming object is the outgoing object.
//      *
//      * @param sideEffectFunction the function of the pipe
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> sideEffect(final PipeFunction<E, ?> sideEffectFunction) {
//         return this.add(new SideEffectFunctionPipe(sideEffectFunction));
//     }

//     /**
//      * Add a StorePipe to the end of the Pipeline.
//      * Lazily store the incoming objects into the provided collection.
//      *
//      * @param storage the collection to store results into
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> store(final Collection<E> storage) {
//         return this.add(new StorePipe<E>(storage));
//     }

//     /**
//      * Add a StorePipe to the end of the Pipeline.
//      * Lazily store the object returned by the function over the incoming object into the provided collection.
//      *
//      * @param storage         the collection to store results into
//      * @param storageFunction the function to run over each object prior to insertion into the storage collection
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> store(final Collection storage, final PipeFunction<E, ?> storageFunction) {
//         return this.add(new StorePipe<E>(storage, storageFunction));
//     }

//     /**
//      * Add an StorePipe to the end of the Pipeline.
//      * An ArrayList storage collection is provided and filled lazily with incoming objects.
//      *
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> store() {
//         return this.store(new ArrayList<E>());
//     }

//     /**
//      * Add a StorePipe to the end of the Pipeline.
//      * An ArrayList storage collection is provided and filled lazily with the return of the function evaluated over the incoming objects.
//      *
//      * @param storageFunction the function to run over each object prior to insertion into the storage collection
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> store(final PipeFunction<E, ?> storageFunction) {
//         return this.store(new ArrayList(), storageFunction);
//     }

//     /**
//      * Add a TablePipe to the end of the Pipeline.
//      * This step is used for grabbing previously seen objects the pipeline as identified by as-steps.
//      *
//      * @param table           the table to fill
//      * @param stepNames       the partition steps to include in the filling
//      * @param columnFunctions the post-processing function for each column
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> table(final Table table, final Collection<String> stepNames, final PipeFunction... columnFunctions) {
//         return this.add(new TablePipe(table, stepNames, FluentUtility.getAsPipes(this), columnFunctions));
//     }

//     /**
//      * Add a TablePipe to the end of the Pipeline.
//      * This step is used for grabbing previously seen objects the pipeline as identified by as-steps.
//      *
//      * @param table           the table to fill
//      * @param columnFunctions the post-processing function for each column
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> table(final Table table, final PipeFunction... columnFunctions) {
//         return this.add(new TablePipe(table, null, FluentUtility.getAsPipes(this), columnFunctions));
//     }

//     /**
//      * Add a TablePipe to the end of the Pipeline.
//      * This step is used for grabbing previously seen objects the pipeline as identified by as-steps.
//      *
//      * @param columnFunctions the post-processing function for each column
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> table(final PipeFunction... columnFunctions) {
//         return this.add(new TablePipe(new Table(), null, FluentUtility.getAsPipes(this), columnFunctions));
//     }

//     /**
//      * Add a TablePipe to the end of the Pipeline.
//      * This step is used for grabbing previously seen objects the pipeline as identified by as-steps.
//      *
//      * @param table the table to fill
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> table(final Table table) {
//         return this.add(new TablePipe(table, null, FluentUtility.getAsPipes(this)));
//     }

//     /**
//      * Add a TablePipe to the end of the Pipeline.
//      * This step is used for grabbing previously seen objects the pipeline as identified by as-steps.
//      *
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> table() {
//         return this.add(new TablePipe(new Table(), null, FluentUtility.getAsPipes(this)));
//     }

//     /**
//      * Add a TreePipe to the end of the Pipeline
//      * This step maintains an internal tree representation of the paths that have flowed through the step.
//      *
//      * @param tree            an embedded Map data structure to store the tree representation in
//      * @param branchFunctions functions to apply to each path object in a round robin fashion
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> tree(final Tree tree, final PipeFunction... branchFunctions) {
//         return this.add(new TreePipe<E>(tree, branchFunctions));
//     }

//     /**
//      * Add a TreePipe to the end of the Pipeline
//      * This step maintains an internal tree representation of the paths that have flowed through the step.
//      *
//      * @param branchFunctions functions to apply to each path object in a round robin fashion
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> tree(final PipeFunction... branchFunctions) {
//         return this.add(new TreePipe<E>(branchFunctions));
//     }

//     ///////////////////////
//     /// TRANSFORM PIPES ///
//     ///////////////////////

//     /**
//      * Add a GatherPipe to the end of the Pipeline.
//      * All the objects previous to this step are aggregated in a greedy fashion and emitted as a List.
//      *
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, List> gather() {
//         return this.add(new GatherPipe());
//     }

//     /**
//      * Add a GatherPipe to the end of the Pipeline.
//      * All the objects previous to this step are aggregated in a greedy fashion into a List.
//      * The provided function is applied to the aggregate and the results of the function are emitted.
//      * Typically, the output of the function is a pruned List.
//      * This is good for selective breadth-first searching.
//      *
//      * @param function a transformation to apply to the gathered list
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, ?> gather(PipeFunction<List, ?> function) {
//         return this.add(new GatherFunctionPipe(function));
//     }

//     /**
//      * Add an IdentityPipe to the end of the Pipeline.
//      * Useful in various situations where a step is needed without processing.
//      * For example, useful when two as-steps are needed in a row.
//      *
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> _() {
//         return this.add(new IdentityPipe());
//     }

//     /**
//      * Add a MemoizePipe to the end of the Pipeline.
//      * This step will hold a Map of the objects that have entered into its pipeline section.
//      * If an input is seen twice, then the map stored output is emitted instead of recomputing the pipeline section.
//      *
//      * @param namedStep the name of the step previous to memoize to
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> memoize(final String namedStep) {
//         return this.add(new MemoizePipe(new Pipeline(FluentUtility.removePreviousPipes(this, namedStep))));
//     }

//     /**
//      * Add a MemoizePipe to the end of the Pipeline.
//      * This step will hold a Map of the objects that have entered into its pipeline section.
//      * If an input is seen twice, then the map stored output is emitted instead of recomputing the pipeline section.
//      *
//      * @param numberedStep the number of the step previous to memoize to
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> memoize(final int numberedStep) {
//         return this.add(new MemoizePipe(new Pipeline(FluentUtility.removePreviousPipes(this, numberedStep))));
//     }

//     /**
//      * Add a MemoizePipe to the end of the Pipeline.
//      * This step will hold a Map of the objects that have entered into its pipeline section.
//      * If an input is seen twice, then the map stored output is emitted instead of recomputing the pipeline section.
//      *
//      * @param namedStep the name of the step previous to memoize to
//      * @param map       the memoization map
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> memoize(final String namedStep, final Map map) {
//         return this.add(new MemoizePipe(new Pipeline(FluentUtility.removePreviousPipes(this, namedStep)), map));
//     }

//     /**
//      * Add a MemoizePipe to the end of the Pipeline.
//      * This step will hold a Map of the objects that have entered into its pipeline section.
//      * If an input is seen twice, then the map stored output is emitted instead of recomputing the pipeline section.
//      *
//      * @param numberedStep the number of the step previous to memoize to
//      * @param map          the memoization map
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> memoize(final int numberedStep, final Map map) {
//         return this.add(new MemoizePipe(new Pipeline(FluentUtility.removePreviousPipes(this, numberedStep)), map));
//     }

//     /**
//      * Add an OrderPipe to the end of the Pipeline.
//      * This step will sort the objects in the stream in a default Comparable order.
//      *
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> order() {
//         return this.add(new OrderPipe());
//     }

//     /**
//      * Add an OrderPipe to the end of the Pipeline.
//      * This step will sort the objects in the stream according to a comparator defined in the provided function.
//      *
//      * @param compareFunction a comparator function of two objects of type E
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> order(final PipeFunction<Pair<E, E>, Integer> compareFunction) {
//         return this.add(new OrderPipe(compareFunction));
//     }

//     /**
//      * Add a PathPipe or PathPipe to the end of the Pipeline.
//      * This will emit the path that has been seen thus far.
//      * If path functions are provided, then they are evaluated in a round robin fashion on the objects of the path.
//      *
//      * @param pathFunctions the path function of the PathPipe
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, List> path(final PipeFunction... pathFunctions) {
//         return this.add(new PathPipe<Object>(pathFunctions));
//     }

//     /**
//      * Add a ScatterPipe to the end of the Pipeline.
//      * Any inputted iterator or iterable is unrolled and the iterator/iterable's objects are emitted one at a time.
//      *
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, ?> scatter() {
//         return this.add(new ScatterPipe());
//     }

//     /**
//      * Add a SelectPipe to the end of the Pipeline.
//      * The objects of the named steps (via as) previous in the pipeline are emitted as a Row object.
//      * A Row object extends ArrayList and simply provides named columns and some helper methods.
//      * If column functions are provided, then they are evaluated in a round robin fashion on the objects of the Row.
//      *
//      * @param stepNames       the name of the steps in the expression to retrieve the objects from
//      * @param columnFunctions the functions to apply to the column objects prior to filling the Row
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, Row> select(final Collection<String> stepNames, final PipeFunction... columnFunctions) {
//         return this.add(new SelectPipe(stepNames, FluentUtility.getAsPipes(this), columnFunctions));
//     }

//     /**
//      * Add a SelectPipe to the end of the Pipeline.
//      * The objects of the named steps (via as) previous in the pipeline are emitted as a Row object.
//      * A Row object extends ArrayList and simply provides named columns and some helper methods.
//      * If column functions are provided, then they are evaluated in a round robin fashion on the objects of the Row.
//      *
//      * @param columnFunctions the functions to apply to the column objects prior to filling the Row
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, Row> select(final PipeFunction... columnFunctions) {
//         return this.add(new SelectPipe(null, FluentUtility.getAsPipes(this), columnFunctions));
//     }

//     /**
//      * Add a SelectPipe to the end of the Pipeline.
//      * The objects of the named steps (via as) previous in the pipeline are emitted as a Row object.
//      * A Row object extends ArrayList and simply provides named columns and some helper methods.
//      *
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, Row> select() {
//         return this.add(new SelectPipe(null, FluentUtility.getAsPipes(this)));
//     }

//     /**
//      * Add a SideEffectCapPipe to the end of the Pipeline.
//      * When the previous step in the pipeline is implements SideEffectPipe, then it has a method called getSideEffect().
//      * The cap step will greedily iterate the pipeline and then, when its empty, emit the side effect of the previous pipe.
//      *
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, ?> cap() {
//         return this.add(new SideEffectCapPipe((SideEffectPipe) FluentUtility.removePreviousPipes(this, 1).get(0)));

//     }

//     /**
//      * Add a TransformFunctionPipe to the end of the Pipeline.
//      * Given an input, the provided function is computed on the input and the output of that function is emitted.
//      *
//      * @param function the transformation function of the pipe
//      * @return the extended Pipeline
//      */
//     public <T> GremlinPipeline<S, T> transform(final PipeFunction<E, T> function) {
//         return this.add(new TransformFunctionPipe(function));
//     }

//     //////////////////////
//     /// UTILITY PIPES ///
//     //////////////////////

//     /**
//      * Wrap the previous step in an AsPipe.
//      * Useful for naming steps and is used in conjunction with various other steps including: loop, select, back, table, etc.
//      *
//      * @param name the name of the AsPipe
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, E> as(final String name) {
//         return this.add(new AsPipe(name, FluentUtility.removePreviousPipes(this, 1).get(0)));
//     }

//     /**
//      * Add a StartPipe to the end of the pipeline.
//      * Though, in practice, a StartPipe is usually the beginning.
//      * Moreover, the constructor of the Pipeline will internally use StartPipe.
//      *
//      * @param object the object that serves as the start of the pipeline (iterator/iterable are unfolded)
//      * @return the extended Pipeline
//      */
//     public GremlinPipeline<S, S> start(final S object) {
//         this.add(new StartPipe<S>(object));
//         FluentUtility.setStarts(this, object);
//         return (GremlinPipeline<S, S>) this;
//     }

//     ///////////////////////
//     /// UTILITY METHODS ///
//     ///////////////////////

//     /**
//      * Return the number of objects iterated through the pipeline.
//      *
//      * @return the number of objects iterated
//      */
//     public long count() {
//         return PipeHelper.counter(this);
//     }

//     /**
//      * Completely drain the pipeline of its objects.
//      * Useful when a sideEffect of the pipeline is desired.
//      */
//     public void iterate() {
//         PipeHelper.iterate(this);
//     }

//     /**
//      * Return the next X objects in the pipeline as a list.
//      *
//      * @param number the number of objects to return
//      * @return a list of X objects (if X objects occur)
//      */
//     public List<E> next(final int number) {
//         final List<E> list = new ArrayList<E>(number);
//         PipeHelper.fillCollection(this, list, number);
//         return list;
//     }

//     /**
//      * Return a list of all the objects in the pipeline.
//      *
//      * @return a list of all the objects
//      */
//     public List<E> toList() {
//         final List<E> list = new ArrayList<E>();
//         PipeHelper.fillCollection(this, list);
//         return list;
//     }

//     /**
//      * Fill the provided collection with the objects in the pipeline.
//      *
//      * @param collection the collection to fill
//      * @return the collection filled
//      */
//     public Collection<E> fill(final Collection<E> collection) {
//         PipeHelper.fillCollection(this, collection);
//         return collection;
//     }

//     public GremlinPipeline<S, E> enablePath() {
//         this.enablePath(true);
//         return this;
//     }

//     /**
//      * When possible, Gremlin takes advantage of certain sequences of pipes in order to make a more concise, and generally more efficient expression.
//      * This method will turn on and off query optimization from this stage in the pipeline on.
//      *
//      * @return The GremlinPipeline with the optimization turned off
//      */
//     public GremlinPipeline<S, E> optimize(final boolean optimize) {
//         this.doQueryOptimization = optimize;
//         return this;
//     }
//      */

              
    }
}

    function addStep(stepName) {
        steps[stepName] = true;
    }

    function isStep(stepName) {
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

    // GRAPHML

    function loadGraphML (fileObject) {
        try {
            GraphMLReader.inputGraph(this.graph, new URL(fileObject).openStream());
        } catch (e) {
            GraphMLReader.inputGraph(this.graph, new FileInputStream(fileObject))
        } finally {
            print(this.graph.toString());
        }
    }

    function saveGraphML (fileObject) {
        GraphMLWriter.outputGraph(this.graph, new FileOutputStream(fileObject))
    }

    // GRAPHSON

    function loadGraphSON(fileObject) {
        try {
            GraphSONReader.inputGraph(this.graph, new URL(fileObject).openStream());
        } catch (e) {
            GraphSONReader.inputGraph(this.graph, new FileInputStream(fileObject));
        } finally {
            print(this.graph.toString());
        }
    }

    function saveGraphSON(fileObject) {
        GraphSONWriter.outputGraph(this.graph, new FileOutputStream(fileObject), GraphSONMode.NORMAL);
    }

    // GML

    function loadGML (fileObject) {
        try {
            GMLReader.inputGraph(this.graph, new URL(fileObject).openStream());
        } catch (e) {
            GMLReader.inputGraph(this.graph, new FileInputStream(fileObject));
        } finally {
            print(this.graph.toString());
        }
    }

    function saveGML(fileObject) {
        GMLWriter.outputGraph(this.graph, new FileOutputStream(fileObject));
    }

    Gremlin.prototype.version = version;
    Gremlin.prototype.language = language;

    Gremlin.prototype.V = V;
    Gremlin.prototype.E = E;

    Gremlin.prototype.v = v;
    Gremlin.prototype.e = e;

    Gremlin.prototype.loadGraphSON = loadGraphSON;
    Gremlin.prototype.saveGraphSON = saveGraphSON;
    Gremlin.prototype.loadGraphML = loadGraphML;
    Gremlin.prototype.saveGraphML = saveGraphML;
    Gremlin.prototype.loadGML = loadGML;
    Gremlin.prototype.saveGML = saveGML;


    if (freeExports) {
        //if (typeof module == 'object' && module && module.exports == freeExports) {
          (module.exports = Gremlin).Gremlin = Gremlin;
        //}
    }

}(this));
