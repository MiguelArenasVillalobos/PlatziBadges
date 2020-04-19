import React from "react";

function BadgesListItem(props) {
  return (
    <React.Fragment>
      <img
        className="BadgeList__avatar"
        src={props.badge.avatarUrl}
        alt="Avatar"
      />
      <div className="BadgesList__dates">
        <p className="BadgeList__dates-title">
          {props.badge.firstName} {props.badge.lastName}
        </p>
        <p className="BadgesList__dates-twitter" href="https://twitter.com/">
          @{props.badge.twitter}
        </p>
        <p>{props.badge.jobTitle}</p>
      </div>
    </React.Fragment>
  );
}

export default BadgesListItem;
