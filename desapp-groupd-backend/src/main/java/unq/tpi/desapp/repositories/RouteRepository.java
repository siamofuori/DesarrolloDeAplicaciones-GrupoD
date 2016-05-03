package unq.tpi.desapp.repositories;

import unq.tpi.desapp.model.Route;
import unq.tpi.desapp.model.User;

public class RouteRepository extends HibernateGenericDAO<Route> implements GenericRepository<Route> {
	
	@Override
	protected Class<Route> getDomainClass() {
		return Route.class;
	}
}