function App(){
    const [Feedback, setFeedback]=React.useState([]);
    const [theme,setTheme]=React.useState(localStorage).getItem(theme)||('light');

    React.useEffect(()=>{
        const feedbackRef=db.ref('feedbacks');
    })
}

