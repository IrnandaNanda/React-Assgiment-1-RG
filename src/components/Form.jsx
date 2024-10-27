const Form = () => {
    return (
      <>
        <Form id="form-student">
          <label>Fullname</label>
          <input type="text" id="input-name" />
  
          <label>Birth Date</label>
          <input type="date" id="input-date" />
  
          <label>Gender</label>
          <select id="input-gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
  
          <label>Program Study</label>
          <select id="input-prody">
            <option value="Ekonomi">Ekonomi</option>
            <option value="Manajemen">Manajemen</option>
            <option value="Akuntansi">Akuntansi</option>
            <option value="Administrasi Publik">Administrasi Publik</option>
            <option value="Administrasi Bisnis">Administrasi Bisnis</option>
            <option value="Hubungan Internasional">Hubungan Internasional</option>
            <option value="Teknik Sipil">Teknik Sipil</option>
            <option value="Arsitektur">Arsitektur</option>
            <option value="Matematika">Matematika</option>
            <option value="Fisika">Fisika</option>
            <option value="Informatika">Informatika</option>
          </select>
  
  
        <button type="submit" value="Add Student" id="add-btn">Add Student</button>
        </Form>
      </>
    );
  };
  
  export default Form;