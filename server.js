var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    
  'article-one'  :{
      title:'Article-one',
      head:'Article-one | assignment',
      date:'Aug 22',
      content:`
        <p>
        article one is here.article one is here.article one is here.article one is here.
        </p>
        <p>
        article one is here.article one is here.article one is here.article one is here.
        </p>
        `
  },
  
  'article-two'  :{
      title:'Article-two',
      head:'Article-two | assignment',
      date:'Aug 22',
      content:`
        <p>
        article-two is here.
        </p>
        `
  },
  
  'article-three'  :{
      title:'Article-three',
      head:'Article-three | assignment',
      date:'Aug 22',
      content:`
        <p>
        article-three is here.
        </p>
        `
  }
};

function createTemplate(item){
    var title=item.title;
    var date=item.date;
    var head=item.head;
    var content=item.content;
    var htmltemplate=`
        <html>
            <head>
                <title>${title}</title>
                <meta name="viewport" content="width-device-width, initial-scale =1" />
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            
            <body>
                <div>
                    ${date}
                </div>
                <hr/>
                
                <div>
                    ${head}
                </div>
                        
                <div>
                    ${content}
                </div>
            </body>
        </html>`;
        return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui','main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
