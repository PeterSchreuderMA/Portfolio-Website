
<?php
    $actual_link = $_SERVER["REQUEST_URI"];
?>

<html>

<head>
    <meta name="author" content="Peter Schreuder">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Debug -->
    <!--<meta http-equiv="refresh" content="3; URL=<?php echo $actual_link ?>">-->

    <!-- All the styles -->
    <link rel="stylesheet" href="/portfolio/css/style.css">
    <link rel="stylesheet" href='/portfolio/css/style_title.css'>
    <link rel="stylesheet" href='/portfolio/css/style_navigator.css'>

    <!-- Add icon library -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>

<body>

    <div class="Title" onclick="location.href='/portfolio/';">
        <h1>Peter Schreuder</h1>
    </div>

    <div class='navigator'>
        <ul>
            <li><a class='<?php if($actual_link  == "/portfolio/") { echo 'active'; }  ?>' href='/portfolio/'>Home</a></li>
            <li><a class='<?php if($actual_link  == "/portfolio/folders/projects/") { echo 'active'; }  ?>' href='/portfolio/folders/projects/'>Projects</a></li>
            <li><a class='<?php if($actual_link  == "/portfolio/folders/about/") { echo 'active'; }  ?>' href='/portfolio/folders/about/'>About</a></li>
            <li style='float:right'><a class='<?php if($actual_link  == "/portfolio/folders/contact/") { echo 'active'; }  ?>' href='/portfolio/folders/contact/'>Contact</a></li>
        </ul>
    </div>



</body>

</html>