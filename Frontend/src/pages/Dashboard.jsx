
export const Dashboard = () => {
    const proces = [
        {
          code: "B13E439542",
          date: "02/12/2024",
          lieu: "Bouchared",
          montant: "2500,00 DZD",
          categorie: "Excès de vitesse",
        },
        {
          code: "C04E43984",
          date: "13/08/2024",
          lieu: "Bordj Bounaama",
          montant: "3000,00 DZD",
          categorie: "Non-port du casque",
        },
      ];
    
      return (
        <div className="container my-2">
          {/* Header Section */}
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Statut du permis</h5>
                  <span className="badge bg-success fs-6">En ma possession</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Total des procès</h5>
                  <span className="fs-6">2 procès</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Montant à payer</h5>
                  <span className="badge bg-danger fs-6">5500,00 DZD</span>
                </div>
              </div>
            </div>
          </div>
    
          {/* Active Cases Section */}
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title mb-4">Procès Actives</h3>
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead className="table-light">
                    <tr>
                      <th>Code Procès</th>
                      <th>Date</th>
                      <th>Lieu</th>
                      <th>Montant</th>
                      <th>Catégorie</th>
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
    