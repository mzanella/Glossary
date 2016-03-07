#!/bin/bash
sed -i '$ d' Glossario.xml; 
echo "	<voce>
		<termine>
			$1
		</termine>
		<descrizione>
			$2
		</descrizione>
	</voce>
</glossario>" >> Glossario.xml;