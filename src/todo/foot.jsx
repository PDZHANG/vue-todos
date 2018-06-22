import '../assets/css/foot.css'

export default {
    data(){
        return {
            author:'allen'
        }
    },
    render(){
        return(
            <div id="footer">
                <h4>Written By {this.author}</h4>
            </div>
        )
    }

}