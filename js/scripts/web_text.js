const projects = [];
const alternative_text = "" +
    "I'am currently working on this website while i'm inside a train. " +
    "I'am currently working on this website while i'm inside a train. " +
    "I'am currently working on this website while i'm inside a train. " +
    "I'am currently working on this website while i'm inside a train. " +
    "I'am currently working on this website while i'm inside a train. " +
    "I'am currently working on this website while i'm inside a train. " +
    "I'am currently working on this website while i'm inside a train. " +
    "I'am currently working on this website while i'm inside a train. ";

//Loop through all the Elements with the id 'project_'
for (var _i = 0; _i < document.getElementsByClassName('a_project').length; _i++)
{
    var _project = document.getElementById('project_' + _i);

    if (_project != null)
        projects[_i] = _project;
    else
        break;
}

//EditProjectElement
//(
//    projects[2],
//    "Project 03", /* Title */
//    undefined, /* Image */
//    undefined, /* Skills */
//    undefined  /* Story */
//);

EditProjectElement
(
    projects[0],
    "Portfolio Website", /* Title */
    undefined, /* Image */
    '- HTML<br>- CSS<br>- PHP', /* Skills */
    'When I started to develop my portfolio website I had little to no experience with webdevelopment languages. Currently I have around ' /* Story */
);

EditProjectElement
(
    projects[1],
    "HotHaze", /* Title */
    undefined, /* Image */
    '- Advanced GML (GameMaker Language)<br>- Gameplay Design', /* Skills */
    'This is one of my main projects where i have the most hours spend in. I began to develop it in 2017. I restarted development once in January 2019, where i remade the game from scratch (which was the best decision). After I learned allot of programming skills at my current collage course.'  /* Story */
);

EditProjectElement
(
    projects[2],
    "Project 03", /* Title */
    undefined, /* Image */
    undefined, /* Skills */
    undefined  /* Story */
);


function EditProjectElement(_element, _title, _image, _skills, _story)
{
    this.image = _image || '../../media/images/Project_Image_Example.jpg';
    this.skills = _skills || '- Programming'
    this.story = _story || alternative_text;

    if (_element != null)
        _element.innerHTML =

            '<h2 class="pr_title">' + _title + '</h2>' +
            '<br>' +
            '<img src=' + this.image + '>' +
            '<br>' +
            '<div class="pr_container_skills">' +
            '<h2 class="pr_title_skills">Acquired Skills</h2>' +
            '<h3>' + this.skills + '</h3>' +
            '</div>' +
            '<h1 style="font-weight: normal; margin: 2%">---</h1>' +
            '<h3>' + this.story + '</h3>' +
            '<br>' +
            '<a class="fa fa-github"></a><a class="fa fa-trello"></a>'
        ;
}

console.log("hallo");