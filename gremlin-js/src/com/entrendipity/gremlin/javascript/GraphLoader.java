package com.entrendipity.gremlin.javascript;

import com.tinkerpop.blueprints.Graph;
import com.tinkerpop.blueprints.util.io.graphson.GraphSONReader;
import com.tinkerpop.gremlin.java.GremlinPipeline;

import java.io.FileInputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;

public class GraphLoader {
//    private static final String V = "V";
//    private static final String E = "E";

    private Graph graph;

    public GraphLoader(Graph graph){
        this.graph = graph;
        System.err.println("In here! - " + this.graph);
    }

    public GremlinPipeline V() {
        return new GremlinPipeline(this.graph.getVertices());
    }

    public GremlinPipeline V(final String key, final Object value) {
        return new GremlinPipeline(this.graph.getVertices(key, value));
    }

    // GRAPHSON

    public void loadGraphSON(String fileObject) throws IOException {
        try {
            GraphSONReader.inputGraph(this.graph, new URL(fileObject).openStream());
        } catch (MalformedURLException e) {
            GraphSONReader.inputGraph(this.graph, new FileInputStream(fileObject));
        }
        System.err.println("done! - " + this.graph);
    }
}
