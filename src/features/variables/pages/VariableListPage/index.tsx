import { useEffect, useRef, useState } from 'react';
import ForceGraph2D, { ForceGraphMethods, GraphData } from 'react-force-graph-2d';

import { useVariables } from 'features/variables/hooks/useVariables';

export default function VariableListPage() {
  const [initialCenter, setInitialCenter] = useState(true);
  const [graphData, setGraphData] = useState<GraphData | null>(null);

  const forceRef = useRef<ForceGraphMethods>();
  const { data: variables, isLoading, error } = useVariables();

  useEffect(() => {
    if (variables?.length !== 0) {
      const updatedGraphData: GraphData = { nodes: [], links: [] };
      variables?.forEach((variable) => {
        updatedGraphData.nodes.push({
          id: variable.id,
          name: variable.name,
        });

        updatedGraphData.links.push({
          source: variable.id,
          target: variable.additionalSource?.id,
        });
      });

      setGraphData(updatedGraphData);
    }
  }, [variables]);

  if (isLoading) return <div>Variables are loading...</div>;
  if (error) return <div>Error occurred</div>;
  return (
    <div>
      {graphData && (

      <ForceGraph2D
        width={window.innerWidth}
        height={650}
        ref={forceRef}
        graphData={graphData}
        cooldownTicks={50}
        nodeRelSize={3}
        onEngineStop={() => {
          if (initialCenter) {
            forceRef?.current?.zoomToFit();
          }
          setInitialCenter(false);
        }}
        nodeCanvasObjectMode={() => 'after'}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.name;
          const fontSize = node.isClusterNode
            ? 14 * (node.val / 1500)
            : 14 / (globalScale * 1.2);
          ctx.font = `${fontSize}px Sans-Serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = node.isClusterNode ? 'white' : 'black'; // node.color;
          if (node.isClusterNode) {
            const lineHeight = fontSize * 1.2;
            const lines = label.split(',');
            const { x } = node;
            let y = node?.y || 0 - lineHeight;
            for (let i = 0; i < lines.length; ++i) {
              ctx.fillText(lines[i], x, y);
              y += lineHeight;
            }
          } else if (globalScale >= 3.5) {
            ctx.fillText(label, node?.x || 0, node?.y || 0 + 2.5);
          }
        }}
        enableNodeDrag={false}
      />
      )}
    </div>
  );
}
