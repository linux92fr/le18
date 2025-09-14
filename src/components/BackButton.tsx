import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="outline"
      onClick={() => navigate(-1)}
      className="mb-6 inline-flex items-center gap-2"
    >
      <ArrowLeft className="h-4 w-4" />
      Retour
    </Button>
  );
};

export default BackButton;