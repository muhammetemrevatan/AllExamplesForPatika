import PropTypes from "prop-types";

function User({ array, name, surname, isTrue, age, address }) {
    return (
        <div>
            <div>
                {array &&
                    array.map((human, index) => {
                        return (
                            <div key={human.id}>
                                <h2>id : {human.id}</h2>
                                <h2>name : {human.name}</h2>
                                <hr />
                            </div>
                        );
                    })
                }
            </div>
            <div>
                <label>{address.title} {address.zip}</label>
            </div>
            <div>
                <form>
                    <label>{name}</label>
                    <br />
                    <label>{surname}</label>
                    <br />
                    <label>{isTrue ? "dogru" : "yanlis"}</label>
                    <br />
                    <label>{age}</label>
                </form>
            </div>
        </div>
    );
}

User.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string.isRequired,
    isTrue: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    array: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
}

User.defaultProps = {
    name: "No name"
}

export default User;