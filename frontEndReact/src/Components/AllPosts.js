function AllPosts(props) {
    return (
        <div>
            {props.posts.map((post)=> {
                return (
                    <div className={'post'}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default AllPosts;