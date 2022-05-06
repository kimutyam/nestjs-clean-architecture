export interface UseCase<In, Out> {
  run(input: In): Promise<Out>;
}
