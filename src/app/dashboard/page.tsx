function Dashboard() {
  // gets rendered as a child for layout if children is used in layout
  // in this example the settings page does not have it's own layout
  // so dasbhoard layout get used anyway
  // if subtree has it's own layout both layouts are used.
  // parents layout and child layout
  return <div>hello my first server component</div>;
}

export default Dashboard;
