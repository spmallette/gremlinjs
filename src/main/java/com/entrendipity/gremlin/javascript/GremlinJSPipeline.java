package com.entrendipity.gremlin.javascript;

import com.tinkerpop.blueprints.Vertex;
import com.tinkerpop.gremlin.java.GremlinFluentPipeline;
import com.tinkerpop.gremlin.java.GremlinPipeline;
import com.tinkerpop.gremlin.pipes.transform.OutPipe;
import com.tinkerpop.pipes.Pipe;

/**
 * Created with IntelliJ IDEA.
 * User: frank
 * Date: 16/09/12
 * Time: 9:35 PM
 * To change this template use File | Settings | File Templates.
 */
public class GremlinJSPipeline<S, E> extends GremlinPipeline<S, E> {

    public GremlinJSPipeline() {
        super();
    }

    public GremlinJSPipeline(final Object starts) {
        super(starts);
    }

    public <T> GremlinJSPipeline<S, T> add(final Pipe<?, T> pipe) {
        this.addPipe(pipe);
        return (GremlinJSPipeline<S, T>) this;
    }

    public GremlinJSPipeline<S, Vertex> out(final String... labels) {
        return this.add(new OutPipe(labels));
    }

}
