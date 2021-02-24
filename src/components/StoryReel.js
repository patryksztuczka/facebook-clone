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
        profileSrc="https://static.wikia.nocookie.net/silicon-valley/images/3/33/Richard_Hendricks.jpg/revision/latest?cb=20150526104602"
        title="Richard Hendricks"
      />
      <Story
        image="https://dziendobry.tvn.pl/media/cache/content_cover/york-jpg.jpg"
        profileSrc="https://static.tvmaze.com/uploads/images/medium_portrait/222/556599.jpg"
        title="Jared Dunn"
      />
      <Story
        image="https://static.polityka.pl/_resource/res/path/41/9c/419c63ee-5752-41eb-844e-73e804e3bcc0_f1400x900"
        profileSrc="https://cnet2.cbsistatic.com/img/Hw3Sw39gqyRfBWLKFqFC-Jj3r-8=/940x0/2017/04/13/2fc5cbfe-7f5c-4073-99f5-e452d1b85608/silicon-valley-hbo-amanda-crew-monica-6.jpg"
        title="Monica Hall"
      />
      <Story
        image="https://pbs.twimg.com/media/DEdoaGlUIAAxThh.jpg"
        profileSrc="https://i.pinimg.com/originals/07/59/c9/0759c9b979c04fc9b6952c5cfa85ec5f.jpg"
        title="Richard LaFleur"
      />
  </div>
 )
}

export default StoryReel
