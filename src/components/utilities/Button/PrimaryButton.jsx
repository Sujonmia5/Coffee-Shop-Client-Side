import './Button.css'

const PrimaryButton = ({ title }) => {
    return (
        <button role='button' className="btn-pri btn sm:h-[45px] font-jost">
            <a href="/">{title}</a>
        </button>
    );
};

export default PrimaryButton;