package com.entrendipity.gremlin.TG;

import com.entrendipity.gremlin.javascript.GraphLoader;
import org.mozilla.javascript.*;

import com.tinkerpop.blueprints.impls.tg.*;

public class TestTG {

    public static void main(String args[])
    {
        Context cx = Context.enter();
        try {
            Scriptable scope = cx.initStandardObjects();

            GraphLoader g = new GraphLoader(TinkerGraphFactory.createTinkerGraph());
            // Add a global variable "g"
            Object gremlin = Context.javaToJS(g, scope);
            ScriptableObject.putProperty(scope, "g", gremlin);

            String s = "";
            for (int i=0; i < args.length; i++) {
                s += args[i];
            }


            Object result = cx.evaluateString(scope, s, "<cmd>", 1, null);
            System.err.println(Context.toString(result));
        } finally {
            Context.exit();
        }
    }

    public String toString() {
        return "TestTG";
    }

}