// eslint-disable-next-line import/no-extraneous-dependencies
import {Chrono} from 'react-chrono'
import './index.css'

const About = () => {
  const items = [
    {
      cardTitle: 'Once upon an Idea',
      cardSubtitle:
        'on a breezy afternoon of November 2020, it all started with three friends, Pinnac Yeddy, Siddhi Chokhani, and Shubham Pille coming together because of their love for languages and entrepreneurship.Their main purpose was to improve the education quality and critical pedagogy in students learning a foreign language. They wanted to bring the fun back into innovative learning!',
    },
    {
      cardTitle: 'Our first of many happy learners',
      cardSubtitle:
        'We went global at a very early stage! Our first happy learner to board our learning train was Mr. Anant, a 70-year-old man from Qatar who had a passion to learn French. From then on, there was no turning back! Today, we have more than 5000 students learning with us!',
    },
    {
      cardTitle: 'All aboard the language train!',
      cardSubtitle:
        'In less than six months, we were able to bring more than [no.] students closer to learning their dream language! With a staggering increase of [no.] in classes, we have made ourselves the most colossal family of language learners in the city!',
    },
    {
      cardTitle: 'Mumbai Dreams',
      cardSubtitle:
        'From remote working to renting an office, to buying our very own office in Chembur, Mumbai, we have come a long way! We have made massive breakthroughs in the EdTech Industry. Our team of 50+ people is taking great strides to make a name for ourself!',
    },
    {
      cardTitle: 'Expanding our Reach',
      cardSubtitle:
        'We have come a long way! But with every mile we reach, we yearn to go further!',
    },
  ]

  return (
    <div className="about">
      <div className="about-cont-1">
        <div className="top-right">
          <h1 className="right-head">Learn More Than Just a Language</h1>
          <p className="right-desc">
            Whether learning a foreign language is all about learning new
            cultures or obtaining vast career opportunities, we’re your go-to
            Language Academy!
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dzi1shwap/image/upload/v1680019854/image_1_wcq2z1.png"
          alt="img"
          className="top-img"
        />
      </div>
      <div className="number-cont">
        <div className="number-item">
          <img
            src="https://res.cloudinary.com/dzi1shwap/image/upload/v1680019547/student_1_kwbvtt.png"
            alt="student"
            className="number-logo"
          />
          <div className="sub-item">
            <h1 className="sub-head">5000+</h1>
            <p className="sub-desc">Happy Learners</p>
          </div>
        </div>
        <div className="number-item">
          <img
            src="https://res.cloudinary.com/dzi1shwap/image/upload/v1680019547/bulb_2_is7ber.png"
            alt="bulb"
            className="number-logo"
          />
          <div className="sub-item">
            <h1 className="sub-head">50000+</h1>
            <p className="sub-desc">Hours Of Engagement</p>
          </div>
        </div>
        <div className="number-item">
          <img
            src="https://res.cloudinary.com/dzi1shwap/image/upload/v1680019546/training_1_ohtv3m.png"
            alt="training"
            className="number-logo"
          />
          <div className="sub-item">
            <h1 className="sub-head">150+</h1>
            <p className="sub-desc">Alpha Mentors</p>
          </div>
        </div>
      </div>
      <div className="cont-3-timeline">
        <h1 className="how">How did we start?</h1>
        <Chrono items={items} mode="VERTICAL" className="chrono" />
      </div>
      <div className="cont-4-3u">
        <h1 className="head">Our 3Us</h1>
        <p className="french-desc">
          But outside of that, there are several more top reasons to learn
          French:
        </p>
        <ul className="french-list">
          <li className="item">
            <div className="item-number">1</div>
            <p className="item-desc">
              French is the official language of 29 countries. Open up those
              travel plans, y’all!
            </p>
          </li>
          <li className="item">
            <div className="item-number">2</div>
            <p className="item-desc">
              Learn about new cultures from around the globe: whether it’s
              cooking, fashion, theatre, arts or architecture
            </p>
          </li>
          <li className="item">
            <div className="item-number">3</div>
            <p className="item-desc">
              French is a ‘romance’ language. That means it’ll get you closer to
              learning other languages like Spanish, Italian and Portuguese.
            </p>
          </li>
          <li className="item">
            <div className="item-number">4</div>
            <p className="item-desc">
              When someone asks “Does anyone here speak French?” in any given
              scenario, you can be the hero they never knew they needed
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default About
