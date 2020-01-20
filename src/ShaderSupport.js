var g_simpleShader = null;
var g_shaderVertexPositionAttribute = null;

function loadAndCompileShader( id, shaderType ) {
    var shaderText, shaderSource, compiledShader;

    // step 1 :
    shaderText      = document.getElementById(id);
    shaderSource    = shaderText.firstChild.textContent;
    
    // step 2 :
    compiledShader = g_glContext.createShader( shaderType );

    // step 3 : 
    g_glContext.shaderSource( compiledShader, shaderSource );
    g_glContext.compileShader( compiledShader );

    // step 4 :
    if( !g_glContext.getShaderParameter( compiledShader, g_glContext.COMPILE_STATUS ) ) {
        alert( "error" + g_glContext.getShaderInfoLog( compiledShader ));
    }

    return compiledShader;
}

function initSimpleShader( vertexShaderID, fragmentShaderID ) {
    // step 1
    var vertexShader = loadAndCompileShader( vertexShaderID, g_glContext.VERTEX_SHADER );
    var fragmentShader = loadAndCompileShader( fragmentShaderID, g_glContext.FRAGMENT_SHADER );

    // step 2
    g_simpleShader = g_glContext.createProgram();
    g_glContext.attachShader( g_simpleShader, vertexShader );
    g_glContext.attachShader( g_simpleShader, fragmentShader );
    g_glContext.linkProgram( g_simpleShader );

    // step3
    if( !g_glContext.getProgramParameter( g_simpleShader, g_glContext.LINK_STATUS ) ) {
        alert('Error linking shader');
    }

    // step 4
    g_shaderVertexPositionAttribute = g_glContext.getAttribLocation( g_simpleShader, "aPosition" );

    // step 5
    g_glContext.bindBuffer( g_glContext.ARRAY_BUFFER, g_SquareVertexBuffer );
    
    // step 6
    g_glContext.vertexAttribPointer( g_shaderVertexPositionAttribute, 
        3, 
        g_glContext.FLOAT,
        false,
        0,
        0 );
}