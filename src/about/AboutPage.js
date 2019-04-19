import React from 'react';
import { connect } from 'react-redux';
import AboutMainInfo from './AboutMainInfo';
import EmojiInfo from './EmojiInfo';
import styles from './AboutPage.css';
import EmojiList from './EmojiList';

class AboutPage extends React.Component {
  clicking() {
    console.log('clicking');
  }

  renderMainInfo() {
    return (
      <div>
        <img
          src={require('./profileblur.png')}
          alt="profile"
          className={styles.profilepic}
        />

        <p className={styles.text}>
          My name is <b>Jie Xun</b>, and I am a Computer Science student at
          Nanyang Technological University. I will be graduating in December
          2019.
        </p>
      </div>
    );
  }

  render() {
    var infoStyle, description;
    if (this.props.interest) {
      infoStyle = { opacity: 0.2 };
      description = this.props.interest.description;
    } else {
      infoStyle = { opacity: 1 };
      description = '';
    }
    return (
      <div className={styles.contentbox}>
        <AboutMainInfo infoStyle={infoStyle} />
        <EmojiInfo description={description} />
        <div className={styles.emojibar}>
          <EmojiList />
        </div>
        <div className={styles.helper}>
          <i>(mouse over these for more about me)</i>
        </div>
      </div>
    );

    // if (this.props.interest) {
    //   return (
    //     <div className={styles.contentbox}>
    //       <div style={{ opacity: 0.2 }}>{this.renderMainInfo()}</div>
    //       <br />
    //       <EmojiList />
    //     </div>
    //   );
    // }
    // return (
    //   <div className={styles.contentbox}>
    //     {this.renderMainInfo()}
    //     <br />
    //     <EmojiList />
    //   </div>
    // );
  }
}

const mapStateToProps = state => {
  return { interest: state.selectedInterest };
};

export default connect(mapStateToProps)(AboutPage);
