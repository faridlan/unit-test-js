import { UserRepository } from "../src/user-repository";
import { userService } from "../src/user-service";

const repository = new UserRepository();
const service = new userService(repository);

test("test mock class findById", () => {
  const user = { id: 1, name: "John" };
  const findByIdMock = jest.spyOn(repository, "findById");
  findByIdMock.mockReturnValueOnce(user);

  expect(service.findById(1)).toEqual(user);
  expect(repository.findById).toHaveBeenCalled();
});
