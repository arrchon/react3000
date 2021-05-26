import React from 'react';
import ReactDOM from 'react-dom';

function Avatar(props){
  return(
    <img src={props.user.avatarUrl} alt={props.user.name} />
  )
}

function UserInfo(props){
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div>{props.user.name}</div>
    </div>
  )
}

function formatDate(date){
  return date.toLocaleDateString();
}

function Comment(props){
  return(
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  )
}

const comment = {
  date: new Date(),
  text: "열심히 할수록 기회는 따른다.",
  author: {
  name: "jhin",
  avatarUrl: "http://yone10.dothome.co.kr/portfolio/assets/images/aboutImg02@2x.jpg"
  },
}

ReactDOM.render(<Comment date={comment.date} text={comment.text} author={comment.author} />, document.getElementById("root"));
