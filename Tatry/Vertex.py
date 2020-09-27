class Vertex:

  def __init__(self, value):
    self.value = value
    self.edges = {}
    self.target = False
    self.start = False

  def add_edge(self, vertex, weight, difficult):
    self.edges[vertex] = [weight, difficult]

  def get_edges(self):
    return list(self.edges.keys())