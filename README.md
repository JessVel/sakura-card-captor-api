# Sakura CardCaptor API ✨


![ScreenShot](https://raw.github.com/JessVel/sakura-card-capture-api/main/assets/sakura.jpg) 


https://protected-taiga-89091.herokuapp.com/

|HTTP METHOD     |      GET       |
|----------------|----------------|
|api/card        | gets all cards |
|api/card/:id    | gets card by id|



* Example of object: 

```
[
  {
    "_id":"6039396a68347a4a842920cf",
    "cardNumber":1,
    "spanishName":"Viento",
    "englishName":"The Windy",
    "kanji":"風",
    "Rōmaji":"Kaze",
    "appeardManga":"1",
    "appeardAnime":"1",
    "clowCard":"https://static.wikia.nocookie.net/sakuracardcaptors/images/6/6d/Viento.jpg/revision/latest/scale-to-width-down/210?cb=20181225230616&path-prefix=es",
    "sakuraCard":"https://static.wikia.nocookie.net/sakuracardcaptors/images/7/7e/Viento_Sakura.jpg/revision/latest/scale-to-width-down/210?cb=20201116174455&path-prefix=es",
    "__v":0
  }
]
```

### There are currently nine available resources:

`_id`: Card id. <br>
`cardNumber`: This is the card number, not the id. <br>
`spanishName`: Card name in spanish language.<br>
`englishName`: Card name in english language.<br>
`kanji`: Card name in logographic Japanese characters.<br>
`Rōmaji`: Card name in western alphabet transcription.<br>
`appeardManga`: Number of manga in which the card first appeard.<br>
`appeardAnime` : Number of episode in which the card first appeard.<br>
`clowCard`: Image of the Clow Card.<br>
`sakuraCard`: Image of the Sakura Card<br>


### Start proyect 🚀

`npm install`

`npm run dev`

# Clow cards and Sakura cards API made with a lot of love for the community 🌈

Contributions are welcome 💕
