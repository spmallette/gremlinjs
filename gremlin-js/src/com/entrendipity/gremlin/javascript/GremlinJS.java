package com.entrendipity.gremlin.javascript;

import com.tinkerpop.blueprints.impls.tg.*;

import com.tinkerpop.blueprints.Graph;
import com.tinkerpop.blueprints.Vertex;
import com.tinkerpop.gremlin.Tokens;
import com.tinkerpop.gremlin.java.GremlinPipeline;
import com.tinkerpop.gremlin.pipes.transform.OutPipe;
import com.tinkerpop.pipes.Pipe;

//import org.mozilla.javascript.*;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.Function;
import org.mozilla.javascript.Script;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;
import org.mozilla.javascript.commonjs.module.ModuleScript;
import org.mozilla.javascript.commonjs.module.Require;
import org.mozilla.javascript.commonjs.module.RequireBuilder;
import org.mozilla.javascript.commonjs.module.provider.SoftCachingModuleScriptProvider;
import org.mozilla.javascript.commonjs.module.provider.UrlModuleSourceProvider;


import org.mozilla.javascript.annotations.JSFunction;
import org.mozilla.javascript.annotations.JSConstructor;
import org.mozilla.javascript.annotations.JSGetter;


import javax.script.SimpleBindings;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URI;
import java.net.URL;
import java.util.HashSet;
import java.util.List;
import java.util.Scanner;
import java.util.Set;

public class GremlinJS extends ScriptableObject {

    //private static final Set<String> steps = new HashSet<String>();
    //private static final GremlinGroovyScriptEngine engine = new GremlinGroovyScriptEngine();



    //private static final Logger log = LoggerFactory.getLogger(RhinoVerticle.class);

    //private final ClassLoader cl;
//    private final String scriptName = "gremlin.js";
//    private Function stopFunction;
//    private ScriptableObject scope;

    //private static ThreadLocal<ScriptableObject> scopeThreadLocal = new ThreadLocal<>();
    //private static ThreadLocal<ClassLoader> clThreadLocal = new ThreadLocal<>();
    //private static CoffeeScriptCompiler coffeeScriptCompiler = null;

    public GremlinJS() {}

    @JSConstructor
    public GremlinJS(Graph graph) {
    }

    @Override
    public String getClassName() {
        return "GremlinJS";
    }

    @Override
    public Object getDefaultValue(Class<?> typeHint) {
        return toString();
    }

//    public static void load() {
//
////        GremlinPipeline.getMethods().each {
////            if (it.getReturnType().equals(GremlinPipeline.class)) {
////                GremlinJS.addStep(it.getName());
////            }
////        }
////
////        ElementLoader.load();
////        GraphLoader.load();
////        IndexLoader.load();
////        ObjectLoader.load();
////        PipeLoader.load();
////
////        try {
////            SailGraphLoader.load();
////        } catch (Throwable e) {
////            // this means that SailGraph was not in the dependency
////            // that is ok
////        }
//    }
//
//
////    private static GremlinPipeline compose(final Object start, final Pipe pipe) {
////        GremlinPipeline pipeline;
////        if (start instanceof GremlinPipeline) {
////            pipeline = start;
////            if (null != pipe)
////                pipeline.addPipe(pipe);
////        } else if (start instanceof Pipe) {
////            pipeline = new GremlinPipeline();
////            pipeline.addPipe(start);
////            if (null != pipe)
////                pipeline.addPipe(pipe);
////        } else {
////            pipeline = new GremlinPipeline(start);
////            if (null != pipe)
////                pipeline.addPipe(pipe);
////        }
////        return pipeline;
////    }
//
////    public static Pipe compile(final String script) {
////        return (Pipe) engine.eval(script, new SimpleBindings());
////    }
//
//    public static void addStep(final String stepName) {
//        GremlinJS.steps.add(stepName);
//    }
//
//    public static boolean isStep(final String stepName) {
//        return GremlinJS.steps.contains(stepName);
//    }
//
//    public static Set<String> getStepNames() {
//        return new HashSet(GremlinJS.steps);
//    }
//
////    public static void defineStep(final String stepName, final List<Class> classes, final Closure stepClosure) {
////        GremlinJS.steps.add(stepName);
////        classes.each {
////            stepClosure.setDelegate(delegate);
////            it.metaClass."$stepName" = { final Object... parameters ->
////                    GremlinJS.compose(delegate, stepClosure(* parameters));
////            };
////        }
////    }
//
//    public static String version() {
//        return Tokens.VERSION;
//    }
//
//    public static String language() {
//        return "gremlin-groovy";
//    }
}
