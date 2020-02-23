import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./Faq.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Faqs = props => {
  const classes = useStyles();
  return (
    <div className="Faq">
       <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}> <div className="faq_question">
        <h3 className="faq question">{props.value.question}</h3>
      </div></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <div className="faq_answer">
        <p className="faq answer">{props.value.answer}</p>
      </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
    </div>
  );
};
class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faq: [],
      question: "",
      answer: ""
    };
  }

  async componentDidMount() {
    fetch("/faq")
      .then(res => res.json())
      .then(faq => this.setState({ faq }));
  }

  render() {
    return (
      <div>
        {this.state.faq.map((faqs, index) => {
          return <Faqs key={index} faqID={index} value={faqs} />;
        })}
      </div>
    );
  }
}

export default Faq;
