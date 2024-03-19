import Comment from "./Comment";
import { selectCommentsByCampsiteId } from "./commentsSlice";
import {Col} from 'reactstrap';

const CommentsList=({campsiteId})=>{
    const comments=selectCommentsByCampsiteId(campsiteId);

    if(comments && comments.length>0)
    {
        return (
            <Col md='5' className="m-1">
                <h4>Comments</h4>
                {comments.map((comment)=>{
                    return (
                        <Comment comment={comment} key={comment.id}/>
                    );
                })}
            </Col>
        )
    }
    return (
        <Col md='5' className="m-1">
            There is no comment for this campsite yet!
        </Col>
    )

}
export default CommentsList;