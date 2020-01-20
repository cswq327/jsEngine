"use strict";
var g_glContext = null;

function initializeGL() {
    var canvas = document.getElementById( "glCanvas" );
    g_glContext = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if( g_glContext !== null ) {
        g_glContext.clearColor( 0.0, 0.8, 0.0, 1.0 );
    } else {
        document.write("<br><b> WebGL is not supported</b>");
    }
}

function clearCanvas() {
    g_glContext.clear( g_glContext.COLOR_BUFFER_BIT );

}

function glDraw() {
    initializeGL();
    clearCanvas();
}