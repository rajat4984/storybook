import Button from ".";

export default {
  title: "Buttons",               // title of the component in the storybook UI
  component: Button,              // component for which we are writing the story
  parameters: {
    layout: "centered",          // this helps to center the component on the story book UI
  },
  tags: ["autodocs"],           // this helps to create a page that automatically creates documentation for the component
  argTypes: {
    backgroundColor: {          // this is how you create a settings as select box on story book UI
      control: {
        type: "select",
        
      },
      options: ["red", "blue", "green"],    // options for the select box
    },
    label: {
      control: {
        type: "select",
      },
      options: ["Primary", "Secondary", "Large", "Small"],
    },
  },
};


// story -1 
export const Primary = {
  args: {                       //these are the default values of the props we are passing 
    primary: true,
    label: "Primary",
    backgroundColor: "#516cc4",
  },
};


// story - 2
export const Secondary = {
  args: {
    label: "Secondary",
    backgroundColor: "#516cc4",
  },
};

