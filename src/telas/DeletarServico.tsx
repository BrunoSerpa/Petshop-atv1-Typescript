import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const DeletarServicoComponent: React.FC<{}> = ({}) => {
  const [formData, setFormData] = useState({
  });
  const navigate = useNavigate();
  return (
    <h1>Deletar Servicos</h1>
  );
}
export default DeletarServicoComponent;