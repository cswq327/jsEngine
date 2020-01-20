"use strict"
var g_SquareVertexBuffer = null;

function initSquareBuffer() {
    // define vertices
    var vertices =[
        0.5, 0.5, 0.0,
        -0.5, 0.5, 0.0,
        0.5, -0.5, 0.0,
        -0.5, -0.5, 0.0
    ];

    // step 1: create vertexbuffer 
    g_SquareVertexBuffer = g_glContext.createBuffer();

    // step 2: activate vertexbuffer
    g_glContext.bindBuffer( g_glContext.ARRAY_BUFFER, g_SquareVertexBuffer );

    // step 3: load vertices into thee vertextBuffer
    g_glContext.bufferData( g_glContext.ARRAY_BUFFER, new Float32Array(vertices), g_glContext.STATIC_DRAW );

}