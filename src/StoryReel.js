import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
 return (
  <div className="storyReel">
    <Story
        image="https://i.pinimg.com/originals/14/6c/f7/146cf792f689e1a89207dc0cd6ee24e8.jpg"
        profileSrc="https://avatars.githubusercontent.com/u/73931963?s=460&u=fc70f441ad77fd772f8b45648cc3c25631e46bf2&v=4"
        title="Patryk Sztuczka"
      />
      <Story
        image="https://bi.im-g.pl/im/cb/fb/18/z26194635Q.jpg"
        profileSrc="https://www.staradvertiser.com/wp-content/uploads/2021/02/web1_10940793-eb2e4a0c27024c878b3f1ce17134c71e.jpg"
        title="Jan Nowak"
      />
      <Story
        image="https://dziendobry.tvn.pl/media/cache/content_cover/york-jpg.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg"
        title="Adam Kowalski"
      />
      <Story
        image="https://static.polityka.pl/_resource/res/path/41/9c/419c63ee-5752-41eb-844e-73e804e3bcc0_f1400x900"
        profileSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Grzegorz Bąk"
      />
      <Story
        image="https://krakowdirect.com:9876/wp-content/uploads/2020/03/Zakopane-widok-z-Guba%C5%82%C3%B3wki-.jpeg"
        profileSrc="https://techcrunch.com/wp-content/uploads/2015/09/11667534_10102203860243201_2713296330820668368_n.jpg?w=528"
        title="Robert Urbański"
      />
  </div>
 )
}

export default StoryReel
