const cl = console.log;

function posts(state = [], action) {
    cl('The post will change');
    cl(state, action);
    return state;
}

export default posts;