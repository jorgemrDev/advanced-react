import React from "react";
import PropTypes from "prop-types";

const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: "solid",
    borderBottomColor: "#aaa",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
  },
  date: {
    fontSize: "0.85em",
    color: "#888",
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    paddinLeft: 20,
  },
};

const dateDisplay = (datestring) => new Date(datestring).toDateString();

const Article = (props, context) => {
  const author = context.store.lookupAuthor(props.article.authorId);
  return (
    <div style={styles.article}>
      <div style={styles.title}> {props.article.title}</div>
      <div style={styles.date}>{dateDisplay(props.article.date)}</div>
      <div style={styles.author}>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}> {props.article.body}</div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

Article.contextTypes = {
  store: PropTypes.object,
};

export default Article;
