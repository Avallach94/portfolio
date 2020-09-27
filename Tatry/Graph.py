from Vertex import Vertex

class Graph:

  def __init__(self, directed = False):
    self.graph_dict = {}
    self.directed = directed

  def add_vertex(self, vertex):
    self.graph_dict[vertex.value] = vertex


  def add_edge(self, from_vertex, to_vertex, weight, difficult):
    self.graph_dict[from_vertex.value].add_edge(to_vertex.value, weight, difficult)
    if not self.directed:
      self.graph_dict[to_vertex.value].add_edge(from_vertex.value, weight, difficult)

  def find_path(self, start_vertex, end_vertex):
    start = [start_vertex]
    seen = {}
    while len(start) > 0:
      current_vertex = start.pop(0)
      seen[current_vertex] = True
      print("Visiting " + current_vertex)
      if current_vertex == end_vertex:
        return True
      else:
        vertex = self.graph_dict[current_vertex]
        next_vertices = vertex.get_edges()
        next_vertices = [vertex for vertex in next_vertices if vertex not in seen]
        start.extend(next_vertices)

    return  False
