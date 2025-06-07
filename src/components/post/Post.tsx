import './post.css';

export default function Post() {
  return (
    <div className="post">
      <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=940"
        alt="" className="postImg" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">Lorem ipsum dolor sit.</span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>   
        <p className='postDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quia, recusandae aut maiores repellendus culpa rerum ratione quo suscipit dolor, repellat sint! Laborum vero aperiam perferendis sint esse, veniam natus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quia, recusandae aut maiores repellendus culpa rerum ratione quo suscipit dolor, repellat sint! Laborum vero aperiam perferendis sint esse, veniam natus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quia, recusandae aut maiores repellendus culpa rerum ratione quo suscipit dolor, repellat sint! Laborum vero aperiam perferendis sint esse, veniam natus?</p>     
    </div>
  )
}
