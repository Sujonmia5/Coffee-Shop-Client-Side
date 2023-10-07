import './Button.css'

const PrimaryButton = ({ title }) => {
    return (
        <button role='button' className="btn-pri btn font-jost">
            <a href="/">{title}</a>
        </button>
    );
};

export default PrimaryButton;