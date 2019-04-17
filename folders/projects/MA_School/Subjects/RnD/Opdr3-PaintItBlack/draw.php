<?php
  $control="";
  $filePath = "test.json";

  if (!empty($_GET['put']))
  {
    $control= $_GET['put'];
  }


$file = fopen($filePath, "w") or die("can't open file");
fwrite($file, $control);
fclose($file);

?>
