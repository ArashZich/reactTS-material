import React from "react";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from "../constants/TodoFilters";

const FILTER_TITLES = {
  [SHOW_ALL]: "All",
  [SHOW_ACTIVE]: "Active",
  [SHOW_COMPLETED]: "Completed",
};

interface Footer {
  completedCount: any;
  activeCount: number;
  onClearCompleted: any;
}

const Footer = (props: Footer) => {
  const { activeCount } = props;
  const itemWord = activeCount === 1 ? "book" : "books";
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount || "No"}</strong> {itemWord} left to read
      </span>
    </footer>
  );
};

export default Footer;
