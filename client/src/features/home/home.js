import React from "react";
import HomeChild from "./homeChild";
import { Route, Link } from "react-router-dom";

const Home = props => {
  const { home, match } = props;

  return (
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/test1`}>Technology</Link>
        </li>
        <li>
          <Link to="/home/business">Business</Link>
        </li>
        <li>
          <Link to="/home/economics">Economics</Link>
        </li>
      </ul>

      <div>
        {home.showSpinner ? (
          <span>loading...</span>
        ) : (
          <div>
            app1
            <button onClick={() => props.onAddAsync("new title")}>Add</button>
            <button onClick={() => props.onGetUsersAsync()}>get users</button>
          </div>
        )}
      </div>

      <div>
        Home {home.name}
        <HomeChild name={home.name} />
        <ul>
          {home.users.map(person => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      </div>

      <Route
        exact
        path={`${match.path}/:course`}
        render={({ match }) => <div> This is {match.params.course} </div>}
      />
    </div>
  );
};

export default Home;
