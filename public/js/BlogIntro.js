

class BlogIntro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'sss'
        }
    }
    render() {
        return (
            <div className="flex blog-intro">
                <div className="center">
                    <h1 className="entry-title center">Hi, my name is Lena <br/></h1>
                    <h3 className="mb1"> I built this blog to practise<br/>my web-developing skills &#128521;</h3>

                </div>
                <div className="indexejs-photo"><img className="shadow-green" width="150" height="150" styles={{paddingLeft: "50%"}}
                    src="../assets/lena-esposito-photo.jpg" alt="photo of Lena Esposito Web Developer"/>
                </div>

            </div>
        )
    }
}


