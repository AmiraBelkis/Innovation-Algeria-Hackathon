export const ListeDesProces = () => {
    const proces = [
        {
          code: "B13E439542",
          date: "02/12/2024",
          lieu: "Bouchared",
          montant: "2500,00 DZD",
          categorie: "Excès de vitesse",
          statut: "Non réglé",
        },
        {
          code: "C04E43984",
          date: "13/08/2024",
          lieu: "Bordj Bounaama",
          montant: "3000,00 DZD",
          categorie: "Non-port du casque",
          statut: "Non réglé",
        },
        {
          code: "C23F539742",
          date: "23/11/2023",
          lieu: "Bouchared",
          montant: "2500,00 DZD",
          categorie: "Excès de vitesse",
          statut: "Réglé",
        },
      ];
    
      return (
        <div className="container my-4">
          <h3 className="mb-4">Liste des Procès</h3>
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead className="table-light">
                    <tr>
                      <th>Code Procès</th>
                      <th>Date</th>
                      <th>Lieu</th>
                      <th>Montant</th>
                      <th>Catégorie</th>
                      <th>Statut</th>
                    </tr>
                  </thead>
                  <tbody>
                    {proces.map((item, index) => (
                      <tr key={index}>
                        <td>{item.code}</td>
                        <td>{item.date}</td>
                        <td>{item.lieu}</td>
                        <td>{item.montant}</td>
                        <td>{item.categorie}</td>
                        <td>
                          <span
                            className={`badge ${
                              item.statut === "Réglé"
                                ? "bg-success"
                                : "bg-danger"
                            }`}
                          >
                            {item.statut}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    };
