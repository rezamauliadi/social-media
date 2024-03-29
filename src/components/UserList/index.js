import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";

import getAvatar from "src/helpers/avatar-helper";

const UserList = ({ users, url }) => {
  const userCard = user => (
    <Card
      as={Link}
      to={`${url}/${user.id}/posts`}
      key={user.id}
      style={{ width: "198px" }}
    >
      <Image src={getAvatar(user.id)} ui={false} wrapped />
      <Card.Content>
        <Card.Header>{user.name}</Card.Header>
        <Card.Meta>
          <span>{user.username}</span>
        </Card.Meta>
        <Card.Description>{user.company.catchPhrase}</Card.Description>
      </Card.Content>
    </Card>
  );

  return (
    <div>
      <Card.Group>{users.map(user => userCard(user))}</Card.Group>
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.array
};

export default UserList;
