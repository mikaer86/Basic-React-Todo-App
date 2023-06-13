const DarkThemeBtn = ({ handleIconToggle }) => {
  return (
    <>
      <button className='themeSetting' onClick={handleIconToggle}>
        Background
      </button>
    </>
  );
};

export default DarkThemeBtn;
