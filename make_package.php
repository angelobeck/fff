<?php

error_reporting(E_ALL);
$buffer;
$fileContent;
$importPaths = [
"data",
"engine",
"filters",
"library",
"modules",
"tags"
];

function concatFiles($path) {
global $buffer;
$path .= "/";
foreach(scandir($path) as $fileName) {
if($fileName[0] == ".") continue;

if(is_dir($path . $fileName)) {
concatFiles($path . $fileName);
continue;
}

$buffer .= file_get_contents($path . $fileName);
print $path . $fileName . '<br>';
}
}


foreach($importPaths as $path) {
concatFiles($path);
}

$template = '<!DOCTYPE html>
<html lang="pt">
    <head>
        <meta charset="UTF-8">
        <title>fff</title>
<style>'
. file_get_contents("style.css")
. '</style>
</head>
    <body>
        <div id="layout"></div>
        <div id="message" aria-live=""polite"></div>
    </body>
<script>
'
. $buffer
. file_get_contents("setup.js")
. '
</script>
<script src="domainContent.js"></script>
<script>
window.addEventListener("load", setup);
</script>
</html>';

file_put_contents("./fff.html", $template);

?>