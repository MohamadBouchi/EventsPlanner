const initState = {
    projects: [
        {id: '1', title: 'test1', content: 'contenttest1'},
        {id: '2', title: 'test2', content: 'contenttest2'},
        {id: '3', title: 'test3', content: 'contenttest3'},
    ]
};
const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    return state
}

export default projectReducer